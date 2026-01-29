param(
  [string]$Message = "backup"
)

Set-Location (Split-Path $PSScriptRoot -Parent)

git add -A
git commit -m $Message
git push
Write-Host "✅ Backup complete: committed + pushed to GitHub." -ForegroundColor Green
