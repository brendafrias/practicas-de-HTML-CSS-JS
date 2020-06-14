'use strict'
//Funciones anonimas

var pelicula = function(nombre){
	return "La pelicula es: " + nombre;
}

console.log(pelicula("El padrino"));


function Sumame(numero1, numero2, sumaYmuestra,sumaPorDos){
	var sumar = numero1 + numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}

//se usa en jQuery
//pasando funciones anonimas como parametros a una funcion.
Sumame(5,7,function(dato){
	console.log("La suma es",dato);
},function(dato){
	console.log("La suma por 2 es: ",(dato*2));
}
);