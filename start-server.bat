@echo off
echo Starting Travel App Server...
echo.
echo Please make sure you have one of the following installed:
echo - Python (python -m http.server 8080)
echo - Node.js (npx http-server -p 8080)
echo - PHP (php -S 0.0.0.0:8080)
echo.
echo Trying Python...
python -m http.server 8080
if %ERRORLEVEL% NEQ 0 (
    echo Python not found, trying Node.js...
    npx -y http-server -p 8080 -c-1
)
pause
