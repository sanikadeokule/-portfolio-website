@echo off
cd /d "%~dp0"
echo === Removing broken .git if present, starting fresh ===
if exist .git rmdir /s /q .git
git init
git checkout -b main 2>nul
git add -A
git commit -m "Full portfolio: app, components, lib, public + configs"
git branch -M main
git remote add origin https://github.com/sanikadeokule/-portfolio-website.git
echo.
echo === Pushing (replaces the incomplete web upload) ===
git push -u origin main --force
echo.
echo Done! Check https://github.com/sanikadeokule/-portfolio-website
pause
