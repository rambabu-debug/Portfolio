@echo off
REM Setup script for Ram Babu's Portfolio
echo ========================================
echo Setting up Portfolio Environment
echo ========================================

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo Installing dependencies...
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo Installation completed successfully!
    echo ========================================
    echo.
    echo To start development server, run:
    echo   npm run dev
    echo.
    echo To build for production, run:
    echo   npm run build
    echo.
) else (
    echo Installation failed. Please check the errors above.
    pause
    exit /b 1
)

pause

