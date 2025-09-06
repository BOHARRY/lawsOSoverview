# ========================================
# LawsOS 構建測試腳本 (修復版)
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

Write-Info "LawsOS 構建測試"
Write-Info "=================="

# 檢查是否在正確目錄
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
if (!(Test-Path "node_modules") -or !(Test-Path "node_modules/.bin/vite")) {
    Write-Info "安裝依賴..."
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Error "依賴安裝失敗"
        exit 1
    }
}

# 清理舊的構建文件
Write-Info "清理舊的構建文件..."
Safe-Cleanup "dist"

# 構建項目
Write-Info "開始構建..."
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Success "構建成功！"

    # 詳細檢查構建文件
    if (Test-Path "dist/index.html") {
        Write-Info "構建文件檢查："
        Write-Success "  index.html 存在"

        # 檢查 index.html 內容
        $indexContent = Get-Content "dist/index.html" -Raw
        if ($indexContent -like "*assets/*") {
            Write-Success "  index.html 包含 assets 引用"
        } else {
            Write-Warning "  index.html 可能缺少 assets 引用"
        }

        if (Test-Path "dist/assets") {
            $assets = Get-ChildItem "dist/assets" -File
            Write-Success "  assets 目錄存在，包含 $($assets.Count) 個文件"

            $totalSize = 0
            foreach ($asset in $assets) {
                $sizeKB = [math]::Round($asset.Length / 1KB, 2)
                $totalSize += $sizeKB
                Write-Info "    - $($asset.Name) ($sizeKB KB)"
            }
            Write-Info "  總大小: $([math]::Round($totalSize, 2)) KB"

            # 檢查關鍵文件
            $hasCSS = $assets | Where-Object { $_.Extension -eq ".css" }
            $hasJS = $assets | Where-Object { $_.Extension -eq ".js" }

            if ($hasCSS) {
                Write-Success "  包含 CSS 文件"
            } else {
                Write-Warning "  缺少 CSS 文件"
            }

            if ($hasJS) {
                Write-Success "  包含 JS 文件"
            } else {
                Write-Warning "  缺少 JS 文件"
            }
        } else {
            Write-Error "  assets 目錄不存在"
            exit 1
        }

        # 檢查其他資源文件
        $otherFiles = Get-ChildItem "dist" -File | Where-Object { $_.Name -ne "index.html" }
        if ($otherFiles.Count -gt 0) {
            Write-Info "  其他文件:"
            foreach ($file in $otherFiles) {
                $sizeKB = [math]::Round($file.Length / 1KB, 2)
                Write-Info "    - $($file.Name) ($sizeKB KB)"
            }
        }

        # 啟動預覽服務器
        Write-Info ""
        Write-Info "啟動預覽服務器..."
        Write-Info "預覽地址: http://localhost:4173"
        Write-Warning "按 Ctrl+C 停止預覽"
        Write-Info "如果預覽正常，可以運行 .\deploy.ps1 進行部署"
        Write-Info "========================================="

        npm run preview
    } else {
        Write-Error "構建文件不完整：缺少 index.html"
        exit 1
    }
} else {
    Write-Error "構建失敗！"
    Write-Warning "請檢查代碼錯誤並修復後重試"
    Write-Warning "常見問題："
    Write-Warning "  1. 檢查 src/ 目錄下的 JavaScript/JSX 語法錯誤"
    Write-Warning "  2. 檢查 import/export 語句是否正確"
    Write-Warning "  3. 檢查 package.json 中的依賴是否完整"
    exit 1
}
