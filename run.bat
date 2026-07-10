@echo off
cd /d "%~dp0"
echo Installing dependencies (first run only, ~1-2 min)...
call npm install
echo Starting dev server...
start "" http://localhost:3000
call npm run dev
pause
