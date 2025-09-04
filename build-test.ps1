# ========================================
# LawsOS 構建測試腳本
# ========================================

Write-Host "🔨 LawsOS 構建測試" -ForegroundColor Cyan
Write-Host "==================" -ForegroundColor Cyan

# 檢查是否在正確目錄
if (!(Test-Path "package.json")) {
    Write-Host "❌ 錯誤：請在項目根目錄運行此腳本" -ForegroundColor Red
    exit 1
}

# 確保在 main 分支
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    Write-Host "🔄 切換到 main 分支..." -ForegroundColor Yellow
    git checkout main
}

# 清理舊的構建文件
if (Test-Path "dist") {
    Write-Host "🧹 清理舊的構建文件..." -ForegroundColor Yellow
    Remove-Item -Path "dist" -Recurse -Force
}

# 構建項目
Write-Host "🔨 開始構建..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ 構建成功！" -ForegroundColor Green
    
    # 檢查構建文件
    if (Test-Path "dist/index.html") {
        Write-Host "📁 構建文件檢查：" -ForegroundColor Cyan
        Write-Host "  ✅ index.html 存在" -ForegroundColor Green
        
        if (Test-Path "dist/assets") {
            $assets = Get-ChildItem "dist/assets" -File
            Write-Host "  ✅ assets 目錄存在，包含 $($assets.Count) 個文件" -ForegroundColor Green
            foreach ($asset in $assets) {
                Write-Host "    - $($asset.Name)" -ForegroundColor Gray
            }
        } else {
            Write-Host "  ❌ assets 目錄不存在" -ForegroundColor Red
        }
        
        # 啟動預覽服務器
        Write-Host "`n🌐 啟動預覽服務器..." -ForegroundColor Cyan
        Write-Host "📱 預覽地址: http://localhost:4173" -ForegroundColor Cyan
        Write-Host "💡 按 Ctrl+C 停止預覽" -ForegroundColor Yellow
        Write-Host "💡 如果預覽正常，可以運行 .\deploy.ps1 進行部署" -ForegroundColor Yellow
        Write-Host "=========================================" -ForegroundColor Cyan
        
        npm run preview
    } else {
        Write-Host "❌ 構建文件不完整" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ 構建失敗！" -ForegroundColor Red
    Write-Host "💡 請檢查代碼錯誤並修復後重試" -ForegroundColor Yellow
    exit 1
}
