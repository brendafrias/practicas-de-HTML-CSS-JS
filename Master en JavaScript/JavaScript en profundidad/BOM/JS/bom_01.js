'use strict'
//BOM (browser objet model)


console.log(window.innerWidth); //con windows accedemos al objeto ventana y con . podemos acceder a sus atributos
console.log(window.innerHeight);// muestro los atributos de alto y ancho.
//va a tomar el esto actual.

//creamos una funcion para utilizar esto en diferentes partes en las que modificamos la ventana.
function getBom(){
	console.log(window.innerWidth); //con windows accedemos al objeto ventana y con . podemos acceder a sus atributos
	console.log(window.innerHeight);
}

//al llamar a la funcion nos muestra diferentes valores segun vaya cambiando window
getBom(); //llamarla por consola!!!.

//luego tenemos screen.Width

//Ahora obtendremos la url cargada
console.log(window.location);
/*
EN LA CONSOLA NOS MOSTRARA:

Location {href: "file:///C:/Users/Brenda/Desktop/curso%20de%20js/pr…ript/JavaScript%20en%20profundidad/BOM/index.html", ancestorOrigins: DOMStringList, origin: "file://", protocol: "file:", host: "", …}

Y OTROS PARAMETROS COMO EL HREF, HOST, HOSTNAME,HASH.
*/


//Ahora crearemos una funcion que me redirija a otra url

function Redirect(url){
	window.location.href = url;
}

//llamar a Redirect("url"); desde la consola

//Ahora una funcion que lo abra en una nueva pestaña
function abrirVentana(url){
	window.open(url, "","width=400 , height=300");//si le agregamos mas parametros podemos controlar el tamaño en que se abre.
}

//llamar a la funcion por consola
//abrirVentana("https://google.com");

