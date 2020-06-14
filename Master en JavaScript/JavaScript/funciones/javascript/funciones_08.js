'use strict'
//Plantillas de texto

var nombre = prompt("Introduce tu nombre");
var apellido = prompt("Introduce apellido");

var texto = "Mi nombre es: " + nombre + " Mi apellido es: " + apellido;

document.write(texto);


//multilinea
//plantillas de js con html incluido
//comillas invertidas "al lado de la letra p"
// ${} interpolo el dato de una variable dentro de una plantilla.
var texto1 = `
		<h1>Hola que tal</h1>
		<h3>Mi nombre es: ${nombre} </h3>
		<h3>Mi apellido es: ${apellido} </h3>
		`;

document.write(texto1);
