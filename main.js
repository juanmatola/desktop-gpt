const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

function createWindow() {

    // Obtiene información de los monitores conectados
    const displays = screen.getAllDisplays();

    // Selecciona el monitor en el que deseas abrir la ventana
    // Usa índice 0 para el monitor principal, 1 para el segundo, etc.
    const targetDisplay = displays[1] || displays[0];

    // Obtiene las coordenadas x e y del monitor seleccionado
    const { x, y, width: displayWidth, height: displayHeight } = targetDisplay.bounds;

    // Define el tamaño de la ventana de la aplicación
    const windowWidth = 1000;
    const windowHeight = 800;

    // Calcula las coordenadas para centrar la ventana en el monitor seleccionado
    const centerX = x + (displayWidth - windowWidth) / 2;
    const centerY = y + (displayHeight - windowHeight) / 2;

    const iconPath = process.platform === 'win32'
        ? path.join(__dirname, 'assets/icon.ico')
        : process.platform === 'darwin'
            ? path.join(__dirname, 'assets/icon.icns')
            : path.join(__dirname, 'assets/icon.png');


    const mainWindow = new BrowserWindow({
        title: 'DesktopGPT | ChatGPT | Open AI',
        width: windowWidth,
        height: windowHeight,
        x: centerX,
        y: centerY,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
        icon: iconPath,
        darkTheme: true
    });

    mainWindow.loadURL('https://chat.openai.com/chat');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
