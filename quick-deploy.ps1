# ========================================
# LawsOS 快速部署腳本 (修復版)
# ========================================

param(
    [string]$Message = ""
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

Write-Info "快速部署模式"
Write-Info "=================="

# 檢查是否在正確的目錄
if (!(Test-Path "package.json")) {
    Write-Error "錯誤：請在項目根目錄運行此腳本"
    exit 1
}

# 檢查部署腳本是否存在
if (!(Test-Path "deploy.ps1")) {
    Write-Error "錯誤：找不到 deploy.ps1 腳本"
    exit 1
}

# 提交信息
if ([string]::IsNullOrWhiteSpace($Message)) {
    $timestamp = Get-Date -Format "MM-dd HH:mm"
    $Message = "快速更新: $timestamp"
}

Write-Info "提交信息: $Message"

# 執行完整部署
Write-Info "執行部署腳本..."
try {
    & .\deploy.ps1 -Message $Message -Force

    if ($LASTEXITCODE -eq 0) {
        Write-Success "快速部署成功！"
        Write-Info "網站地址: https://boharry.github.io/lawsOSoverview/"
    } else {
        Write-Error "快速部署失敗！"
        exit 1
    }
} catch {
    Write-Error "部署腳本執行出錯: $($_.Exception.Message)"
    exit 1
}
