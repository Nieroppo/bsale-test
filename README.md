# Bsale-test

Esta es la aplicación para la prueba técnica de bsale, donde se muestra el frontend muestra los productos del catálogo o también los que el usuario busque obtenidos en el backend,
en ambos casos agrupados según su categoría. Mientras el backend interactúa con una base de datos para obtener la información de los productos. 

## Documentación Backend:

El backend esta construido a partir de NodeJs, express ,y MySQL; y se encuentra desplegado en heroku<br>
##### Link: [https://vp-bsale-test-api.herokuapp.com/api/](https://vp-bsale-test-api.herokuapp.com/api/)
##### Documentación de la API en postman <a href="https://documenter.getpostman.com/view/18405971/UVsEWpoH" target="_blank">Link aquí</a>

#### Organización de los archivos

```
    ├── src
    │   ├── controllers
    │   │   ├── category.controller.js
    │   │   └── product.controller.js
    │   ├── routes
    │   │   ├── category.routes.js
    │   │   └── product.routes.js
    │   ├── app.js
    │   ├── config.js
    │   ├── database.js
    │   └── index.js
    ├── package-lock.json
    └── package.json
```

## Documentación Frontend:

El frontend es una Single Page Application que esta contruido a partir de HTML, vanilla javascript, y CSS; y se encuentra desplegado en heroku<br>
##### Link: [https://vp-bsale-test.herokuapp.com](https://vp-bsale-test.herokuapp.com)

#### Organización de los archivos

```
    ├── app
    │   ├── assents
    │   │   ├── loader.svg
    │   │   └── style.css
    │   ├── components
    │   │   ├── Dropdown.js
    │   │   ├── DropdownMenu.js
    │   │   ├── DropdownContent.js
    │   │   ├── Header.js
    │   │   ├── Loader.js
    │   │   ├── ProductCard.js
    │   │   ├── Product.js
    │   │   ├── Router.js
    │   │   ├── SearchForm.js
    │   │   └── Title.js
    │   ├── Helper
    │   │   ├── ajax.js
    │   │   ├── api.js
    │   │   └── inifiniteScroll.js
    │   ├── App.js
    │   └── index.js
    └── index.html
```

## Rutas

##### Ruta  ```/ ``` ó ```#/ ```
Muestra los primeros diez productos del la base de datos agrupados según su categoría, y carga productos a medida que se baja dentro de la página. <br>
Imagen de muestra:
![image_text](https://github.com/Nieroppo/bsale-test/blob/main/inicio.png)


##### Ruta  ```#/search?search= ``` 
Muestra los primeros diez productos realacionados con la busqueda, y carga productos a medida que se baja dentro de la página. <br>
Imagen de muestra:
![image_text](https://github.com/Nieroppo/bsale-test/blob/main/busqueda.png)
##### Ruta  ```#/categorty/{id}``` 
Muestra los primeros diez productos según el id de la categoría, y carga productos a medida que se baja dentro de la página. <br>
Imagen de muestra:
![image_text](https://github.com/Nieroppo/bsale-test/blob/main/categoria.png)
