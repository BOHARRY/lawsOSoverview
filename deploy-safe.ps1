# ========================================
# LawsOS 安全部署腳本 (完全重寫版)
# ========================================

param(
    [string]$Message = "",
    [switch]$Force = $false
)

# 顏色輸出函數
function Write-ColorOutput($ForegroundColor) {
    $fc = $host.UI.RawUI.ForegroundColor
    $host.UI.RawUI.ForegroundColor = $ForegroundColor
    if ($args) {
        Write-Output $args
    }
    $host.UI.RawUI.ForegroundColor = $fc
}

function Write-Success { Write-ColorOutput Green $args }
function Write-Info { Write-ColorOutput Cyan $args }
function Write-Warning { Write-ColorOutput Yellow $args }
function Write-Error { Write-ColorOutput Red $args }

Write-Info "LawsOS 安全部署腳本 (重寫版)"
Write-Info "=================================="

# 檢查是否在正確的目錄
if (!(Test-Path "package.json")) {
    Write-Error "錯誤：請在項目根目錄運行此腳本"
    exit 1
}

# 確保在 main 分支
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    Write-Info "切換到 main 分支..."
    git checkout main
    if ($LASTEXITCODE -ne 0) {
        Write-Error "無法切換到 main 分支"
        exit 1
    }
}

# 檢查依賴
Write-Info "檢查依賴..."
if (!(Test-Path "node_modules/.bin/vite")) {
    Write-Info "安裝依賴..."
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Error "依賴安裝失敗"
        exit 1
    }
}

# 提交信息處理
if ([string]::IsNullOrWhiteSpace($Message)) {
    $Message = Read-Host "請輸入提交信息（直接回車使用默認信息）"
    if ([string]::IsNullOrWhiteSpace($Message)) {
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        $Message = "自動更新: $timestamp"
    }
}

# 清理並構建
Write-Info "清理舊的構建文件..."
if (Test-Path "dist") {
    Remove-Item -Path "dist" -Recurse -Force
}

Write-Info "構建項目..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "構建失敗！"
    exit 1
}

# 驗證構建文件
if (!(Test-Path "dist/index.html")) {
    Write-Error "構建文件不完整：缺少 index.html"
    exit 1
}

if (!(Test-Path "dist/assets")) {
    Write-Error "構建文件不完整：缺少 assets 目錄"
    exit 1
}

Write-Success "構建成功"

# 創建一個完全獨立的部署目錄（在項目外部）
$tempPath = [System.IO.Path]::GetTempPath()
$deployDir = Join-Path $tempPath "lawsos-deploy-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Write-Info "創建部署目錄: $deployDir"

New-Item -ItemType Directory -Path $deployDir -Force | Out-Null

# 只複製必要的文件
Write-Info "複製構建文件..."
Copy-Item -Path "dist/index.html" -Destination $deployDir -Force
Copy-Item -Path "dist/assets" -Destination $deployDir -Recurse -Force

# 複製圖片文件（如果存在）
$imageFiles = Get-ChildItem "dist" -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|gif|ico|svg)$' }
foreach ($file in $imageFiles) {
    Copy-Item -Path $file.FullName -Destination $deployDir -Force
    Write-Info "複製圖片: $($file.Name)"
}

# 驗證部署目錄
$deployFiles = Get-ChildItem $deployDir -Recurse -File
Write-Info "部署文件統計："
Write-Info "  總文件數: $($deployFiles.Count)"
foreach ($file in $deployFiles | Sort-Object Name) {
    $size = [math]::Round($file.Length / 1KB, 2)
    Write-Info "    $($file.Name) ($size KB)"
}

# 如果文件數量異常，停止部署
if ($deployFiles.Count -gt 20) {
    Write-Error "部署文件數量異常 ($($deployFiles.Count) 個)，停止部署"
    Remove-Item -Path $deployDir -Recurse -Force
    exit 1
}

# 切換到 gh-pages 分支
Write-Info "切換到 gh-pages 分支..."
git checkout gh-pages
if ($LASTEXITCODE -ne 0) {
    Write-Error "無法切換到 gh-pages 分支"
    git checkout main
    Remove-Item -Path $deployDir -Recurse -Force
    exit 1
}

# 清理 gh-pages 分支的所有文件（除了 .git）
Write-Info "清理 gh-pages 分支..."
$filesToRemove = Get-ChildItem -Force | Where-Object { $_.Name -ne ".git" }
foreach ($item in $filesToRemove) {
    Remove-Item -Path $item.FullName -Recurse -Force
    Write-Info "已刪除: $($item.Name)"
}

# 複製部署文件到 gh-pages 分支
Write-Info "複製部署文件到 gh-pages 分支..."
Copy-Item -Path "$deployDir/*" -Destination "." -Recurse -Force

# 清理部署目錄
Remove-Item -Path $deployDir -Recurse -Force

# 驗證最終結果
$finalFiles = Get-ChildItem -File
Write-Info "最終部署文件："
foreach ($file in $finalFiles | Sort-Object Name) {
    $size = [math]::Round($file.Length / 1KB, 2)
    Write-Info "  $($file.Name) ($size KB)"
}

# 提交並推送
Write-Info "提交並推送到 gh-pages..."
git add .
git commit -m "部署: $Message"
if ($LASTEXITCODE -eq 0) {
    Write-Success "成功提交到 gh-pages"
    git push origin gh-pages
    if ($LASTEXITCODE -eq 0) {
        Write-Success "成功部署到 GitHub Pages"
    } else {
        Write-Error "推送到 gh-pages 失敗"
        git checkout main
        exit 1
    }
} else {
    Write-Warning "沒有新的更改需要部署"
}

# 回到 main 分支
Write-Info "回到 main 分支..."
git checkout main
if ($LASTEXITCODE -ne 0) {
    Write-Error "無法切換回 main 分支"
    exit 1
}

# 清理構建文件
if (Test-Path "dist") {
    Remove-Item -Path "dist" -Recurse -Force
}

Write-Success "部署完成！"
Write-Info "=================================="
Write-Info "網站地址: https://boharry.github.io/lawsOSoverview/"
Write-Info "網站將在 2-5 分鐘內更新"
Write-Info "=================================="
