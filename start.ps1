# ================================================
#  Braindump — Script de lancement
#  Mets ta clé API Anthropic sur la ligne ci-dessous
# ================================================

$env:ANTHROPIC_API_KEY = "METS_TA_CLE_ICI"

# Chemins
$root     = Split-Path -Parent $MyInvocation.MyCommand.Path
$backend  = Join-Path $root "backend"
$frontend = Join-Path $root "frontend"

# Lancement backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", `
  "Write-Host '--- BACKEND ---' -ForegroundColor Cyan; " + `
  "cd '$backend'; " + `
  "`$env:ANTHROPIC_API_KEY = '$env:ANTHROPIC_API_KEY'; " + `
  "pip install -r requirements.txt -q; " + `
  "python app.py"

# Lancement frontend
Start-Process powershell -ArgumentList "-NoExit", "-Command", `
  "Write-Host '--- FRONTEND ---' -ForegroundColor Green; " + `
  "cd '$frontend'; " + `
  "npm install --silent; " + `
  "npm run dev"

# Attendre que les serveurs démarrent puis ouvrir le navigateur
Start-Sleep 4
Start-Process "http://localhost:3000"

Write-Host ""
Write-Host "Braindump lancé !" -ForegroundColor Green
Write-Host "Frontend : http://localhost:3000"
Write-Host "Backend  : http://localhost:5000"
