# ========================================
# LawsOS 自動部署腳本
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

# 檢查是否在正確的目錄
if (!(Test-Path "package.json")) {
    Write-Error "❌ 錯誤：請在項目根目錄運行此腳本"
    exit 1
}

Write-Info "🚀 開始 LawsOS 自動部署流程..."
Write-Info "=================================="

# 檢查 Git 狀態
Write-Info "📋 檢查 Git 狀態..."
$gitStatus = git status --porcelain
if ($gitStatus -and !$Force) {
    Write-Warning "⚠️  發現未提交的更改："
    git status --short
    $confirm = Read-Host "是否繼續部署？(y/N)"
    if ($confirm -ne "y" -and $confirm -ne "Y") {
        Write-Info "部署已取消"
        exit 0
    }
}

# 確保在 main 分支
Write-Info "🔄 切換到 main 分支..."
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    git checkout main
    if ($LASTEXITCODE -ne 0) {
        Write-Error "❌ 無法切換到 main 分支"
        exit 1
    }
}

# 拉取最新代碼
Write-Info "⬇️  拉取最新代碼..."
git pull origin main
if ($LASTEXITCODE -ne 0) {
    Write-Warning "⚠️  拉取代碼時出現問題，繼續執行..."
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
    Write-Info "📝 提交更改到 main 分支..."
    git add .
    git commit -m $Message
    if ($LASTEXITCODE -eq 0) {
        Write-Success "✅ 成功提交到 main 分支"
        git push origin main
        if ($LASTEXITCODE -eq 0) {
            Write-Success "✅ 成功推送到遠程 main 分支"
        } else {
            Write-Error "❌ 推送到遠程 main 分支失敗"
            exit 1
        }
    } else {
        Write-Warning "⚠️  沒有新的更改需要提交"
    }
}

# 構建項目
if (!$SkipBuild) {
    Write-Info "🔨 構建項目..."
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Error "❌ 構建失敗！請檢查代碼"
        exit 1
    }
    Write-Success "✅ 構建成功"
} else {
    Write-Warning "⚠️  跳過構建步驟"
}

# 檢查 dist 目錄
if (!(Test-Path "dist")) {
    Write-Error "❌ dist 目錄不存在，請先運行構建"
    exit 1
}

Write-Info "🚀 開始部署到 GitHub Pages..."

# 切換到 gh-pages 分支
Write-Info "🔄 切換到 gh-pages 分支..."
git checkout gh-pages
if ($LASTEXITCODE -ne 0) {
    Write-Error "❌ 無法切換到 gh-pages 分支"
    exit 1
}

# 清理舊文件
Write-Info "🧹 清理舊的部署文件..."
if (Test-Path "assets") {
    Remove-Item -Path "assets" -Recurse -Force
}
if (Test-Path "index.html") {
    Remove-Item -Path "index.html" -Force
}

# 複製新文件
Write-Info "📁 複製構建文件..."
# 確保在 main 分支並檢查 dist 目錄
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    git checkout main
    if ($LASTEXITCODE -ne 0) {
        Write-Error "❌ 無法切換到 main 分支"
        exit 1
    }
}

if (!(Test-Path "dist")) {
    Write-Error "❌ dist 目錄不存在，請先運行構建"
    exit 1
}

# 創建臨時目錄並複製構建文件
Write-Info "📦 創建臨時部署目錄..."
if (Test-Path "temp-deploy") {
    Remove-Item -Path "temp-deploy" -Recurse -Force
}
New-Item -ItemType Directory -Path "temp-deploy" -Force | Out-Null
Copy-Item -Path "dist/*" -Destination "temp-deploy" -Recurse -Force

# 切換到 gh-pages 分支
Write-Info "🔄 切換到 gh-pages 分支進行部署..."
git checkout gh-pages
if ($LASTEXITCODE -ne 0) {
    Write-Error "❌ 無法切換到 gh-pages 分支"
    # 清理臨時目錄
    git checkout main
    Remove-Item -Path "temp-deploy" -Recurse -Force -ErrorAction SilentlyContinue
    exit 1
}

# 複製文件到 gh-pages 分支
Copy-Item -Path "temp-deploy/*" -Destination "." -Recurse -Force

# 清理臨時目錄
Remove-Item -Path "temp-deploy" -Recurse -Force -ErrorAction SilentlyContinue

# 提交並推送 gh-pages
Write-Info "📤 提交並推送到 gh-pages..."
git add .
git commit -m "部署: $Message"
if ($LASTEXITCODE -eq 0) {
    git push origin gh-pages
    if ($LASTEXITCODE -eq 0) {
        Write-Success "✅ 成功部署到 GitHub Pages"
    } else {
        Write-Error "❌ 推送到 gh-pages 失敗"
        git checkout main
        exit 1
    }
} else {
    Write-Warning "⚠️  沒有新的更改需要部署"
}

# 回到 main 分支
Write-Info "🔄 回到 main 分支..."
git checkout main
if ($LASTEXITCODE -ne 0) {
    Write-Warning "⚠️  無法切換回 main 分支，請手動執行: git checkout main"
}

Write-Success "🎉 部署完成！"
Write-Info "=================================="
Write-Info "🌐 網站地址: https://boharry.github.io/lawsOSoverview/"
Write-Info "⏰ 網站將在 2-5 分鐘內更新"
Write-Info "💡 提示：如果網站沒有更新，請清除瀏覽器緩存"
