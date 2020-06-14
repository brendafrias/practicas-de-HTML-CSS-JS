'use strict'
//Arrays y Matrices

var nombre = "brenda frias";
//array comun entra texto numeros booleanos todo tipo de dato.
var nombres = ["brenda frias", "mariana franco", "elizabeth paoli", 62, true];


//array creando un objeto
var lenguajes = new Array("php", "js", "c", "java");

console.log(nombres);
console.log(lenguajes);
//con f12 en el navegador podemos ver el interior del array

//como acceder a una pocicion en el arraty
console.log(nombres[3]);

//nos permite q el usuario ingrese el numero de elemento que quiere y lo muestra.
var elemento = parseInt(prompt("que elemento del array quieres",0));

if (elemento >= nombres.length) {
	alert("error se paso de la cantidad");
} else{
	alert(nombres[elemento]);
}


document.write("<h1>Lenguajes de prog </h1>");

for (var i = 0; i < lenguajes.length; i++) {
 	document.write(lenguajes[i]);
 	document.write("<br/>");
}


//funcion de callback con forEach para mostrar los elementos de un array
lenguajes.forEach((elemento, index, data) =>{
	document.write("<li>" + elemento + "</li>");
	document.write("indice: " + index);
	console.log(data);

});




