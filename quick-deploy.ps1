# ========================================
# LawsOS 快速部署腳本
# ========================================

param(
    [string]$Message = ""
)

Write-Host "⚡ 快速部署模式" -ForegroundColor Cyan
Write-Host "==================" -ForegroundColor Cyan

# 提交信息
if ([string]::IsNullOrWhiteSpace($Message)) {
    $timestamp = Get-Date -Format "MM-dd HH:mm"
    $Message = "快速更新: $timestamp"
}

Write-Host "📝 提交信息: $Message" -ForegroundColor Yellow

# 執行完整部署
& .\deploy.ps1 -Message $Message -Force

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 快速部署成功！" -ForegroundColor Green
} else {
    Write-Host "❌ 快速部署失敗！" -ForegroundColor Red
}
