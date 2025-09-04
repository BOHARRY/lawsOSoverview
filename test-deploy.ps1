# ========================================
# LawsOS 部署腳本測試
# ========================================

Write-Host "🧪 測試部署腳本邏輯" -ForegroundColor Cyan
Write-Host "=====================" -ForegroundColor Cyan

# 檢查當前分支
$currentBranch = git branch --show-current
Write-Host "📍 當前分支: $currentBranch" -ForegroundColor Yellow

# 檢查 Git 狀態
Write-Host "📋 檢查 Git 狀態..." -ForegroundColor Yellow
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠️  發現未提交的更改:" -ForegroundColor Yellow
    git status --short
} else {
    Write-Host "✅ 工作目錄乾淨" -ForegroundColor Green
}

# 檢查重要文件
Write-Host "📁 檢查重要文件..." -ForegroundColor Yellow
$files = @("package.json", "index.html", "vite.config.js", "src/App.jsx")
foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file 存在" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file 不存在" -ForegroundColor Red
    }
}

# 測試構建
Write-Host "🔨 測試構建..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ 構建成功" -ForegroundColor Green
    
    # 檢查構建文件
    if (Test-Path "dist") {
        Write-Host "✅ dist 目錄存在" -ForegroundColor Green
        $distFiles = Get-ChildItem "dist" -Recurse -File
        Write-Host "📦 構建文件數量: $($distFiles.Count)" -ForegroundColor Cyan
    } else {
        Write-Host "❌ dist 目錄不存在" -ForegroundColor Red
    }
} else {
    Write-Host "❌ 構建失敗" -ForegroundColor Red
    exit 1
}

# 測試分支切換
Write-Host "🔄 測試分支切換..." -ForegroundColor Yellow

# 保存當前狀態
$originalBranch = git branch --show-current
Write-Host "💾 原始分支: $originalBranch" -ForegroundColor Cyan

# 測試切換到 gh-pages
Write-Host "🔄 切換到 gh-pages..." -ForegroundColor Yellow
git checkout gh-pages
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ 成功切換到 gh-pages" -ForegroundColor Green
    
    # 檢查 gh-pages 分支的文件
    $ghPagesFiles = Get-ChildItem -File | Select-Object -ExpandProperty Name
    Write-Host "📁 gh-pages 分支文件: $($ghPagesFiles -join ', ')" -ForegroundColor Cyan
    
    # 切換回原始分支
    Write-Host "🔄 切換回 $originalBranch..." -ForegroundColor Yellow
    git checkout $originalBranch
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ 成功切換回 $originalBranch" -ForegroundColor Green
        
        # 檢查重要文件是否還在
        foreach ($file in $files) {
            if (Test-Path $file) {
                Write-Host "  ✅ $file 仍然存在" -ForegroundColor Green
            } else {
                Write-Host "  ❌ $file 丟失了！" -ForegroundColor Red
            }
        }
    } else {
        Write-Host "❌ 無法切換回 $originalBranch" -ForegroundColor Red
    }
} else {
    Write-Host "❌ 無法切換到 gh-pages" -ForegroundColor Red
}

Write-Host "🎯 測試完成！" -ForegroundColor Green
Write-Host "💡 如果所有檢查都通過，部署腳本應該能正常工作" -ForegroundColor Cyan
