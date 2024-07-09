# Proyecto
El siguiente es un proyecto del seminario ANGULAR 2024. El cual consta en generar una aplicación web, SPA, usando el framework Angular y lenguaje TypeScript.


## Estudiante
* Romero, Luciana Yael
* 31708286
* luromero@alumnos.exa.unicen.edu.ar
* Sede Tandil

## Docentes
* Franco Stramana
* Agustín Groh (invitado)
* Ariel Monteserin
* Juan Toloza
* Javier Dottori (invitado)
* Juan Valacco (Invitado)


## La Carta. Empanadas

La aplicación web desarrollada, simula la carga y compra de empanadas mediante una página web. 

Se puede seleccionar de una lista de empanadas, la cantidad deseada de cada variedad (dentro del stock disponible) La elección se puede hacer en forma manual, ingresando el valor desde un input o manipulando una a una las cantidades con dos botones, uno que suma y otro que resta. Una vez seleccionada la cantidad deseada, otro botón permite enviar al carrito la cantidad seleccionada por cada tipo de empanada. 

Por otro lado, contamos con el carrito, desde el cual se puede eliminar la cantidad de empanadas que se había seleccionado, de a una, con un botón quitar. Una vez, decidida la compra, se puede efectuar la misma desde el botón comprar, que envía al usuario a una nueva pñagina en la que se detalla en un ticket la compra realizada. En esta página aparece un botón que envía al usuario al inicio de la página, para que pueda efectuar una nueva compra.

La página también cuenta con una sección de contacto, donde aparece información de contacto, a la que se puede llegar desde la barra de navegación.


## Herramientas y tecnologías
* Carga de los jason usados para generar los datos de las empanadas mediante una API externa (mokapi)
* Prueba de la API, envío de peticiones al servicios web y visualización de respuestas con postman.
* Estilos creados mediante framework Boostsrap y css.
* Framework Angular. Version 17.3.7. ## Versión Angular [Angular CLI](https://github.com/angular/angular-cli) 
* Lenguaje TypeScript (ts).
* html
* Node.js
* node
* Git
* VsCode
* Chrome

## Conceptos
* Ruteo
* Directivas
* Componentes
* Templates
* DataBinding
* Directivas 
* Pipes
* HTTPClient

## Componentes del sitio
* carrito
Maneja el template y logica del carrito de compras
* empanadas-list
Maneja el template y lógica de la lista de las empanadas.
* input-integer
Maneja la manipulación de la entrada del usuario en las cantidades de la lista de empanadas
* wow-empanadas
Contiene los componentes de la lista de empanadas y el carrito
* wow nosotros
Contiene la información de contacto
* app
Componente que da la estructura general de la página
* empanada-compra
Recibe el detalle de compra desde carrito, es el ticket







