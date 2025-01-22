# Aplicación Web para podcasts

### Principales bibliotecas utilizadas

- React 18
- React-router-dom
- @tanstack/react-query
- @tanstack/query-sync-storage-persister
- @tanstack/react-query-persist-client
- Zustand
- Typescript
- Sass
- Webpack
- Prettier
- Eslint

### Metodologías

- BEM CSS

### Estructura del proyecto

La aplicacion esta organizada en módulos, cada módulo representa una funcionalidad de la aplicación.

En total se cuenta con 3 modulos:

**src/modules/core**
Aquí se ubican los modelos, componentes comunes, gestor de rutas y del estado de la app

**src/modules/home**
Contiene todos los assets necesarios para mostrar el listado de productos

**src/modules/favorites**
Contiene todos los assets necesarios para mostrar el listado de productos favoritos

**src/modules/cart**
Contiene todos los assets necesarios para mostrar el carrito de compras

Los estilos base de la app y los mixins se encuentran en la carpeta **src/styles** fuera de la carpeta **src/modules**

Además se cuenta con algunos tests en la carpeta **src/tests**

### Como ejecutar la aplicación

La aplicación se puede ejecutar en dos modos: **development y production**

Antes de ejecutar la aplicación es necesario seguir estos pasos iniciales:

- Clonar el repositorio: `git clone`
- Instalar las dedendencias: `npm install`

#### Ejecución en modo development

Primero: Abrir una terminal y entrar a la carpeta /server-api, una vez dentro hay que ejecutar el comando `npm run start` para levantar el servidor que provee los productos

Segundo:
Ejecutar el comando `npm run start` para levantar el servidor de desarrollo de webpack.
Una vez que el servidor este ejecutándose, automáticamente se abrirá una ventana en el navegador y se cargará la aplicación en la dirección http://localhost:8080/

#### Ejecución las pruebas

Los tests unitarios se ejecutan con el comando `npm run test`
