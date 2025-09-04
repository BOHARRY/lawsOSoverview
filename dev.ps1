# ========================================
# LawsOS 開發環境啟動腳本
# ========================================

param(
    [switch]$Install = $false,
    [switch]$Clean = $false
)

Write-Host "🛠️  LawsOS 開發環境" -ForegroundColor Cyan
Write-Host "===================" -ForegroundColor Cyan

# 檢查是否在正確目錄
if (!(Test-Path "package.json")) {
    Write-Host "❌ 錯誤：請在項目根目錄運行此腳本" -ForegroundColor Red
    exit 1
}

# 清理模式
if ($Clean) {
    Write-Host "🧹 清理 node_modules 和 lock 文件..." -ForegroundColor Yellow
    if (Test-Path "node_modules") {
        Remove-Item -Path "node_modules" -Recurse -Force
    }
    if (Test-Path "package-lock.json") {
        Remove-Item -Path "package-lock.json" -Force
    }
    Write-Host "✅ 清理完成" -ForegroundColor Green
    $Install = $true
}

# 安裝依賴
if ($Install -or !(Test-Path "node_modules")) {
    Write-Host "📦 安裝依賴..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ 依賴安裝失敗" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ 依賴安裝完成" -ForegroundColor Green
}

# 確保在 main 分支
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    Write-Host "🔄 切換到 main 分支..." -ForegroundColor Yellow
    git checkout main
}

# 拉取最新代碼
Write-Host "⬇️  拉取最新代碼..." -ForegroundColor Yellow
git pull origin main

Write-Host "🚀 啟動開發服務器..." -ForegroundColor Green
Write-Host "📱 本地地址: http://localhost:5173" -ForegroundColor Cyan
Write-Host "💡 按 Ctrl+C 停止服務器" -ForegroundColor Yellow
Write-Host "===========================================" -ForegroundColor Cyan

# 啟動開發服務器
npm run dev
