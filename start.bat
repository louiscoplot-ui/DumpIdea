@echo off
title MarketScraper
echo ========================================
echo    MarketScraper - Starting...
echo ========================================
echo.

set PATH=%PATH%;C:\Users\LouisCoplot\AppData\Local\Programs\Git\bin
set "PATH=%PATH%;C:\Users\LouisCoplot\OneDrive - BELLE PROPERTY\Documents\Desktop\REIWA App\node-v24.14.1-win-x64"

REM Get the directory where this .bat file is located
set "APPDIR=%~dp0"

echo [1/2] Starting backend...
start "MarketScraper Backend" cmd /k "cd /d "%APPDIR%backend" && pip install --user -r requirements.txt >nul 2>&1 && echo Backend running on http://localhost:5000 && python app.py"

echo [2/2] Starting frontend...
start "MarketScraper Frontend" cmd /k "cd /d "%APPDIR%frontend" && npm install >nul 2>&1 && echo Frontend starting... && npm run dev"

echo.
echo ========================================
echo  Opening browser in 8 seconds...
echo  Backend: http://localhost:5000
echo  Frontend: http://localhost:3000
echo ========================================
timeout /t 8 >nul
start http://localhost:3000

echo.
echo You can close this window.
timeout /t 3 >nul
