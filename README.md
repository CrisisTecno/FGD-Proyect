# Mi Página Web de Recetas y Menús

Esta es una aplicación web creada con TypeScript y React que te permite explorar recetas, ingredientes, menús y gestionar tus compras de ingredientes para tus comidas.

## Estructura de Directorios

- **src/**: Contiene todos los archivos fuente de la aplicación.
  - **components/**: En esta carpeta se encuentran los componentes de la aplicación, incluyendo NavBar, (Aquellos componentes que afecta ala aplicacion como tal).
  - **data/**: Puedes encontrar aquí los datos de ingredientes, recetas, menús y compras. Asegúrate de cargar estos datos desde una fuente real o simulada, como una API o un archivo JSON.
  - **pages/**: Define las rutas de la aplicación INGREDIENTES, MENUS, RECETAS.
  - **App.tsx**: El archivo principal que configura las rutas y Scomponentes de la aplicación.

## Instrucciones para Ejecutar la Aplicación

1. Asegúrate de tener Node.js y npm instalados en tu sistema.
2. Clona este repositorio o descarga los archivos en tu computadora.
3. Abre una terminal en el directorio de la aplicación.
4. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
npm run dev
```