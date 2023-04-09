const { app, BrowserWindow } = require('electron');
const path = require('path');
const WindowManager = require('./utils/windowManager');

/**
 * Creates a new application window using the WindowManager class for positioning and dimensions.
 */
function createWindow() {
    // Creates a WindowManager instance with monitor index 1, and window dimensions 1000x800
    const windowManager = new WindowManager(1, 1000, 800);
    const { x, y, width, height } = windowManager.getWindowBounds();

    // Retrieves the appropriate icon file name based on the current platform
    const iconPath = path.join(__dirname, 'assets', getIconFileName());

    // Creates a new BrowserWindow with the specified options
    const mainWindow = new BrowserWindow({
        title: 'DesktopGPT | ChatGPT | Open AI',
        width: width,
        height: height,
        x: x,
        y: y,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
        icon: iconPath,
        darkTheme: true
    });

    // Loads the specified URL into the mainWindow
    mainWindow.loadURL('https://chat.openai.com/chat');
}

/**
 * Returns the appropriate icon file name based on the current platform.
 *
 * @returns {string} Icon file name.
 */
function getIconFileName() {
    switch (process.platform) {
        case 'win32':
            return 'icon.ico';
        case 'darwin':
            return 'icon.icns';
        default:
            return 'icon.png';
    }
}

// Creates the application window when Electron is ready
app.whenReady().then(createWindow);

// Quits the application when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Creates a new window when the application is activated (e.g., clicking on the dock icon on macOS)
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

