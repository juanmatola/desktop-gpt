# DesktopGPT - ChatGPT Electron App

DesktopGPT es una aplicación de escritorio para interactuar con ChatGPT de OpenAI, desarrollada utilizando Electron JS. La aplicación crea una ventana en el monitor seleccionado y carga la interfaz web de ChatGPT (https://chat.openai.com/chat) en ella. Esta aplicación es compatible con Windows, macOS y Linux.

## Requisitos previos

Antes de comenzar, asegúrese de tener instalado lo siguiente en su máquina:

- Node.js (https://nodejs.org/)
- npm (generalmente viene con Node.js) o yarn (https://yarnpkg.com/)

## Instalación

1. Clone este repositorio:

   ```
   git clone https://github.com/juanmatola/desktop-gpt.git
   ```

2. Navegue al directorio clonado:

   ```
   cd desktop-gpt
   ```

3. Instale las dependencias del proyecto:

   ```
   npm install
   ```

   O si prefiere utilizar `yarn`:

   ```
   yarn
   ```

## Uso

Para iniciar la aplicación en modo de desarrollo, ejecute:

```
npm start
```

O si prefiere utilizar `yarn`:

```
yarn start
```

## Empaquetar la aplicación

Para empaquetar la aplicación para su plataforma, ejecute uno de los siguientes comandos:

- Para Windows:

  ```
  npm run build:win
  ```

  O con `yarn`:

  ```
  yarn build:win
  ```

- Para macOS:

  ```
  npm run build:mac
  ```

  O con `yarn`:

  ```
  yarn build:mac
  ```

- Para Linux (AppImage):

  ```
  npm run build
  ```

  O con `yarn`:

  ```
  yarn build
  ```

Los archivos empaquetados se encontrarán en el directorio `build`.

## Personalización

Para cambiar el monitor en el que se abre la ventana de la aplicación, modifique la siguiente línea en el archivo `main.js`:

```javascript
const targetDisplay = displays[1] || displays[0];
```

Reemplace el índice 1 con el índice del monitor deseado. Por ejemplo, use 0 para el monitor principal, 1 para el segundo monitor, etc.

## Licencia

Este proyecto está bajo la licencia MIT. Consulte el archivo [LICENSE](LICENSE) para obtener más información.