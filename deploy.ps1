# ========================================
# LawsOS 安全部署腳本 (修復版)
# ========================================

param(
    [string]$Message = "",
    [switch]$SkipBuild = $false,
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

# 安全清理函數
function Safe-Cleanup {
    param([string]$Path)
    if (Test-Path $Path) {
        try {
            Remove-Item -Path $Path -Recurse -Force -ErrorAction Stop
            Write-Info "已清理: $Path"
        } catch {
            Write-Warning "清理失敗: $Path - $($_.Exception.Message)"
        }
    }
}

# 驗證構建文件函數
function Validate-BuildFiles {
    param([string]$BuildPath)

    if (!(Test-Path "$BuildPath/index.html")) {
        Write-Error "缺少 index.html"
        return $false
    }

    if (!(Test-Path "$BuildPath/assets")) {
        Write-Error "缺少 assets 目錄"
        return $false
    }

    $assets = Get-ChildItem "$BuildPath/assets" -File
    if ($assets.Count -eq 0) {
        Write-Error "assets 目錄為空"
        return $false
    }

    Write-Success "構建文件驗證通過"
    return $true
}

# 檢查是否在正確的目錄
if (!(Test-Path "package.json")) {
    Write-Error "錯誤：請在項目根目錄運行此腳本"
    exit 1
}

Write-Info "開始 LawsOS 安全部署流程..."
Write-Info "=================================="

# 記錄原始分支
$originalBranch = git branch --show-current
Write-Info "當前分支: $originalBranch"

# 確保在 main 分支
if ($originalBranch -ne "main") {
    Write-Info "切換到 main 分支..."
    git checkout main
    if ($LASTEXITCODE -ne 0) {
        Write-Error "無法切換到 main 分支"
        exit 1
    }
}

# 檢查 Git 狀態
Write-Info "檢查 Git 狀態..."
$gitStatus = git status --porcelain
if ($gitStatus -and !$Force) {
    Write-Warning "發現未提交的更改："
    git status --short
    $confirm = Read-Host "是否繼續部署？(y/N)"
    if ($confirm -ne "y" -and $confirm -ne "Y") {
        Write-Info "部署已取消"
        exit 0
    }
}

# 拉取最新代碼
Write-Info "拉取最新代碼..."
git pull origin main
if ($LASTEXITCODE -ne 0) {
    Write-Warning "拉取代碼時出現問題，繼續執行..."
}

# 確保依賴已安裝
Write-Info "檢查依賴..."
if (!(Test-Path "node_modules") -or !(Test-Path "node_modules/.bin/vite")) {
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

# 提交 main 分支更改
if ($gitStatus) {
    Write-Info "提交更改到 main 分支..."
    git add .
    git commit -m $Message
    if ($LASTEXITCODE -eq 0) {
        Write-Success "成功提交到 main 分支"
        git push origin main
        if ($LASTEXITCODE -eq 0) {
            Write-Success "成功推送到遠程 main 分支"
        } else {
            Write-Error "推送到遠程 main 分支失敗"
            exit 1
        }
    } else {
        Write-Warning "沒有新的更改需要提交"
    }
}

# 清理舊的構建文件
Write-Info "清理舊的構建文件..."
Safe-Cleanup "dist"

# 構建項目
if (!$SkipBuild) {
    Write-Info "構建項目..."
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Error "構建失敗！請檢查代碼"
        exit 1
    }
    Write-Success "構建成功"
} else {
    Write-Warning "跳過構建步驟"
}

# 驗證構建文件
if (!(Validate-BuildFiles "dist")) {
    Write-Error "構建文件驗證失敗"
    exit 1
}

Write-Info "開始部署到 GitHub Pages..."

# 創建安全的臨時目錄
$tempDir = "temp-deploy-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Write-Info "創建臨時部署目錄: $tempDir"
Safe-Cleanup $tempDir
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

# 只複製必要的構建文件
Write-Info "複製構建文件到臨時目錄..."
Copy-Item -Path "dist/index.html" -Destination $tempDir -Force
Copy-Item -Path "dist/assets" -Destination $tempDir -Recurse -Force

# 複製其他必要的靜態資源（如果存在）
if (Test-Path "dist/*.jpg") {
    Copy-Item -Path "dist/*.jpg" -Destination $tempDir -Force
}
if (Test-Path "dist/*.png") {
    Copy-Item -Path "dist/*.png" -Destination $tempDir -Force
}
if (Test-Path "dist/*.ico") {
    Copy-Item -Path "dist/*.ico" -Destination $tempDir -Force
}

# 驗證臨時目錄內容
if (!(Validate-BuildFiles $tempDir)) {
    Write-Error "臨時目錄文件驗證失敗"
    Safe-Cleanup $tempDir
    exit 1
}

# 切換到 gh-pages 分支
Write-Info "切換到 gh-pages 分支..."
git checkout gh-pages
if ($LASTEXITCODE -ne 0) {
    Write-Error "無法切換到 gh-pages 分支"
    git checkout main
    Safe-Cleanup $tempDir
    exit 1
}

# 安全清理 gh-pages 分支的舊文件
Write-Info "清理 gh-pages 分支的舊文件..."
$filesToRemove = @("assets", "index.html", "*.jpg", "*.png", "*.ico")
foreach ($pattern in $filesToRemove) {
    if (Test-Path $pattern) {
        Safe-Cleanup $pattern
    }
}

# 確保不會意外刪除重要文件
$protectedFiles = @(".git", ".gitignore", "README.md", "CNAME")
$currentFiles = Get-ChildItem -Force | Where-Object { $_.Name -notin $protectedFiles }
if ($currentFiles.Count -gt 10) {
    Write-Warning "gh-pages 分支包含過多文件 ($($currentFiles.Count) 個)"
    Write-Warning "這可能表示之前的部署出現問題"
    $confirm = Read-Host "是否繼續清理？(y/N)"
    if ($confirm -ne "y" -and $confirm -ne "Y") {
        Write-Info "部署已取消"
        git checkout main
        Safe-Cleanup $tempDir
        exit 0
    }

    # 強制清理所有非保護文件
    foreach ($file in $currentFiles) {
        Safe-Cleanup $file.FullName
    }
}

# 複製新文件到 gh-pages 分支
Write-Info "複製構建文件到 gh-pages 分支..."
try {
    Copy-Item -Path "$tempDir/*" -Destination "." -Recurse -Force -ErrorAction Stop
    Write-Success "文件複製成功"
} catch {
    Write-Error "文件複製失敗: $($_.Exception.Message)"
    git checkout main
    Safe-Cleanup $tempDir
    exit 1
}

# 驗證複製結果
Write-Info "驗證部署文件..."
if (!(Test-Path "index.html")) {
    Write-Error "index.html 複製失敗"
    git checkout main
    Safe-Cleanup $tempDir
    exit 1
}

if (!(Test-Path "assets")) {
    Write-Error "assets 目錄複製失敗"
    git checkout main
    Safe-Cleanup $tempDir
    exit 1
}

# 顯示部署文件統計
$deployedFiles = Get-ChildItem -Recurse -File
Write-Info "部署文件統計："
Write-Info "  總文件數: $($deployedFiles.Count)"
Write-Info "  主要文件:"
foreach ($file in $deployedFiles | Sort-Object Name) {
    $size = [math]::Round($file.Length / 1KB, 2)
    Write-Info "    $($file.Name) ($size KB)"
}

# 清理臨時目錄
Safe-Cleanup $tempDir

# 提交並推送 gh-pages
Write-Info "提交並推送到 gh-pages..."
git add .
$commitResult = git commit -m "部署: $Message"
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
    if ($commitResult -like "*nothing to commit*") {
        Write-Warning "沒有新的更改需要部署"
    } else {
        Write-Error "提交失敗"
        git checkout main
        exit 1
    }
}

# 安全回到 main 分支
Write-Info "回到 main 分支..."
git checkout main
if ($LASTEXITCODE -ne 0) {
    Write-Error "無法切換回 main 分支"
    Write-Error "請手動執行: git checkout main"
    exit 1
}

# 最終清理
Safe-Cleanup "dist"

Write-Success "部署完成！"
Write-Info "=================================="
Write-Info "網站地址: https://boharry.github.io/lawsOSoverview/"
Write-Info "網站將在 2-5 分鐘內更新"
Write-Info "提示：如果網站沒有更新，請清除瀏覽器緩存"
Write-Info "=================================="
