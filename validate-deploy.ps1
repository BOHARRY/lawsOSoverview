# ========================================
# LawsOS 部署驗證腳本
# ========================================

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

Write-Info "LawsOS 部署驗證"
Write-Info "=================="

# 檢查是否在正確的目錄
if (!(Test-Path "package.json")) {
    Write-Error "錯誤：請在項目根目錄運行此腳本"
    exit 1
}

# 檢查當前分支
$currentBranch = git branch --show-current
Write-Info "當前分支: $currentBranch"

# 檢查 Git 狀態
Write-Info "檢查 Git 狀態..."
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Warning "發現未提交的更改:"
    git status --short
} else {
    Write-Success "工作目錄乾淨"
}

# 檢查重要文件
Write-Info "檢查重要文件..."
$files = @("package.json", "index.html", "vite.config.js", "src/App.jsx")
foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Success "  $file 存在"
    } else {
        Write-Error "  $file 不存在"
    }
}

# 檢查依賴
Write-Info "檢查依賴..."
if (Test-Path "node_modules") {
    if (Test-Path "node_modules/.bin/vite") {
        Write-Success "  Vite 已安裝"
    } else {
        Write-Warning "  Vite 未找到，可能需要重新安裝依賴"
    }
    
    $nodeModulesSize = (Get-ChildItem "node_modules" -Recurse -File | Measure-Object -Property Length -Sum).Sum
    $sizeMB = [math]::Round($nodeModulesSize / 1MB, 2)
    Write-Info "  node_modules 大小: $sizeMB MB"
} else {
    Write-Warning "  node_modules 不存在，需要安裝依賴"
}

# 測試構建
Write-Info "測試構建..."
if (Test-Path "dist") {
    Remove-Item -Path "dist" -Recurse -Force
}

npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Success "構建成功"
    
    # 檢查構建文件
    if (Test-Path "dist") {
        $distFiles = Get-ChildItem "dist" -Recurse -File
        Write-Info "構建文件數量: $($distFiles.Count)"
        
        # 檢查關鍵文件
        if (Test-Path "dist/index.html") {
            Write-Success "  index.html 存在"
        } else {
            Write-Error "  index.html 不存在"
        }
        
        if (Test-Path "dist/assets") {
            $assets = Get-ChildItem "dist/assets" -File
            Write-Success "  assets 目錄存在，包含 $($assets.Count) 個文件"
        } else {
            Write-Error "  assets 目錄不存在"
        }
    } else {
        Write-Error "dist 目錄不存在"
    }
} else {
    Write-Error "構建失敗"
    exit 1
}

# 測試分支切換
Write-Info "測試分支切換..."

# 保存當前狀態
$originalBranch = git branch --show-current
Write-Info "原始分支: $originalBranch"

# 測試切換到 gh-pages
Write-Info "切換到 gh-pages..."
git checkout gh-pages
if ($LASTEXITCODE -eq 0) {
    Write-Success "成功切換到 gh-pages"
    
    # 檢查 gh-pages 分支的文件
    $ghPagesFiles = Get-ChildItem -File | Select-Object -ExpandProperty Name
    Write-Info "gh-pages 分支文件數量: $($ghPagesFiles.Count)"
    
    if ($ghPagesFiles.Count -gt 20) {
        Write-Warning "gh-pages 分支包含過多文件，可能需要清理"
        Write-Warning "文件列表: $($ghPagesFiles -join ', ')"
    } else {
        Write-Success "gh-pages 分支文件數量正常"
        Write-Info "文件列表: $($ghPagesFiles -join ', ')"
    }
    
    # 切換回原始分支
    Write-Info "切換回 $originalBranch..."
    git checkout $originalBranch
    if ($LASTEXITCODE -eq 0) {
        Write-Success "成功切換回 $originalBranch"
        
        # 檢查重要文件是否還在
        foreach ($file in $files) {
            if (Test-Path $file) {
                Write-Success "  $file 仍然存在"
            } else {
                Write-Error "  $file 丟失了！"
            }
        }
    } else {
        Write-Error "無法切換回 $originalBranch"
    }
} else {
    Write-Error "無法切換到 gh-pages"
}

# 清理測試文件
if (Test-Path "dist") {
    Remove-Item -Path "dist" -Recurse -Force
    Write-Info "已清理測試構建文件"
}

Write-Success "驗證完成！"
Write-Info "如果所有檢查都通過，部署腳本應該能正常工作"
