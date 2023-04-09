const { screen } = require('electron');

/**
 * WindowManager class for managing the position and dimensions of a window on a specific monitor.
 */
class WindowManager {
    /**
     * Creates an instance of WindowManager.
     *
     * @param {number} [monitorIndex=0] - Index of the monitor on which to display the window.
     * @param {number} [windowWidth=1000] - Width of the window.
     * @param {number} [windowHeight=800] - Height of the window.
     */
    constructor(monitorIndex = 0, windowWidth = 1000, windowHeight = 800) {
        this.monitorIndex = monitorIndex;
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
    }

    /**
     * Calculates and returns the window bounds (position and dimensions) for the selected monitor.
     *
     * @returns {Object} An object containing the x, y, width, and height properties for the window.
     */
    getWindowBounds() {
        // Retrieves information about connected monitors
        const displays = screen.getAllDisplays();

        // Selects the monitor on which to display the window
        const targetDisplay = displays[this.monitorIndex] || displays[0];

        // Retrieves the x and y coordinates of the selected monitor
        const { x, y, width: displayWidth, height: displayHeight } = targetDisplay.bounds;

        // Calculates coordinates to center the window on the selected monitor
        const centerX = x + (displayWidth - this.windowWidth) / 2;
        const centerY = y + (displayHeight - this.windowHeight) / 2;

        return {
            x: centerX,
            y: centerY,
            width: this.windowWidth,
            height: this.windowHeight,
        };
    }
}


module.exports = WindowManager;
