'use strict'
//Eventos de teclado y foco

var boton2 = document.querySelector("#boton2");
var input = document.querySelector("#campo_nombre");


//Evento focus
//prueba de focus
/*
le creamos una funcion de callback para hacer pruebas
*/
boton2.addEventListener('focus', function(){
	console.log("estas dentro del boton");
});

//misma prueba pero con input
input.addEventListener('focus', function(){
	console.log("estas dentro del input");
});
//conclucion si clickeamos el input(cuadro de texto) en la consola se ejecutara la funcion de callback que dice "estas dentro del input"
//si clickeamos el boton dira por consola estas dentro del boton
//podemos ejecutar la funcion que queramos


//Evento blur
//sirve para indicar cuando dejamos de hacer foco en el input
input.addEventListener('blur', function(){
	console.log("estas fuera del input");
});

//Evento keydown
//cuando estas pulsando una tecla dentro del input larga por consola "estas pulsando una tecla"
/*
input.addEventListener('keydown', function(){
	console.log("estas pulsando una tecla");
});
*/
//de esta forma mostramos por consola la tecla que se preciono(en mayuscula)
input.addEventListener('keydown', function(event){
	console.log("estas pulsando la tecla: ");
	console.log(String.fromCharCode(event.keyCode));
});


//Evento keypress
//lo mismo pero es sensible a may o min
input.addEventListener('keypress', function(event){
	console.log("tecla precionada: ");
	console.log(String.fromCharCode(event.keyCode));
});

//Evento keyup
//lo caputa cuando levanto el dedo
input.addEventListener('keyup', function(event){
	console.log("soltaste la tecla: ");
	console.log(String.fromCharCode(event.keyCode));
});