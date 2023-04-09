# Desktop GPT - ChatGPT Desktop Application

A desktop application for ChatGPT by OpenAI built using Electron.js. This application allows users to interact with ChatGPT in a standalone window and provides customization options for monitor selection and window dimensions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you'll need to have Node.js and npm installed on your system.

### Installing

1. Clone the repository:

```bash
git clone https://github.com/juanmatola/desktop-gpt.git
```

2. Navigate to the project directory:

```bash
cd Desktop-GPT
```

3. Install the required dependencies:

```bash
npm install
```

### Running the Application

To run the application in development mode, execute the following command:

```bash
npm start
```

## Building the Application

To build the application for distribution, use one of the following commands depending on your target platform:

- For all platforms:

```bash
npm run build
```

- For macOS:

```bash
npm run build:mac
```

- For Windows:

```bash
npm run build:win
```

- For Linux:

```bash
npm run build:linux
```

The built application will be available in the `build` folder.

## Project Structure

- `main.js`: The entry point of the application, responsible for creating the application window and handling Electron events.
- `./utils/windowManager.js`: A utility class for managing the position and dimensions of the application window.
- `package.json`: Contains metadata about the application and lists dependencies and build scripts.

## Contributing

Feel free to submit issues and pull requests if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
