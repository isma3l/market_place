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

**src/modules/podcasts**
Contiene todos los assets necesarios para mostrar el listado de podcasts

**src/modules/details**
Contiene todos los assets necesarios para mostrar el detalles de un podcast y de sus episodios

Los estilos base de la app y los mixins se encuentran en la carpeta **src/styles** fuera de la carpeta **src/modules**

Además se cuenta con algunos tests en la carpeta **src/tests**

### Como ejecutar la aplicación

La aplicación se puede ejecutar en dos modos: **development y production**

Antes de ejecutar la aplicación es necesario seguir estos pasos iniciales:

- Clonar el repositorio: `git clone`
- Instalar las dedendencias: `npm install`

#### Ejecución en modo development

Para ejecutar la aplicación en modo desarrollo es necesario contar con el archivo **.env** donde se guardan las URLs del servidor CORs y de itunes apple

Ejecutar el comando `npm run start` para levantar el servidor de desarrollo de webpack.

Una vez que el servidor este ejecutándose, automáticamente se abrirá una ventana en el navegador y se cargará la aplicación en la dirección http://localhost:8080/

#### Ejecución en modo production

Hay que seguir dos pasos:

- Ejecutar el comando `npm run build`  
  Como resultado se crearán los bundles optimizados y se guardaran en una nueva carpeta llamada **dist**

- Desplegar la carpeta **dist** en un servidor local, ejecutando estos comandos:  
   `npm install -g serve`  
  `serve dist`  
  Esto ejecutará la app de producción en la dirección http://localhost:3000

  Sólo queda abrir una ventana en chrome y probar la app en esa dirección.

#### Ejecución las pruebas

Los tests unitarios se ejecutan con el comando `npm run test`
