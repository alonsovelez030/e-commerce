Ecommerce - El Baratón
================
-------------------------------------------------------------------------------------------
### Funcionalidad:
- Despliegue del catálogo de productos, carrito de compras, filtros para los productos por:
. Categorías
. Precio
. Disponibilidad
. Buscador

### Tecnologías:
- Angular 6.1
- [Angular CLI](https://github.com/angular/angular-cli)
- Bootstrap
- Semanti UI
- LocalStorage
- Dependencias manejadas por: [NPM](https://www.npmjs.com/).

### Puesta en marcha (Modo desarrollo):
Si hemos descargado por primera vez el proyecto, debemos instalar los servicios y dependencias, para el correcto funcionamiento de la aplicación con el siguiente comando:
```bash
npm install
```

Si ya instalamos las dependencias, debemos de ubicarnos en la raíz de nuestro proyecto y correr en la terminal el siguiente comando para inicializar el servidor y empezar el desarrollo:

```bash
ng serve
```

### Generar aplicación para producción:
Debemos correr el siguiente comando para generar un bundle package de toda la aplicación:
```bash
ng build --prod
```
Luego debemos ubicarnos la carpeta "dist/" que es el paquete de archivos que debes de desplegar con un servidor de archivos estáticos (ej: Ngnix) en el ambiente de producción.


Desarrollo por: Alonso Velez Marulanda
[LinkdeIn](https://www.linkedin.com/in/alonso-velez-41a93514b/)
[Github](https://github.com/alonsovelez030)