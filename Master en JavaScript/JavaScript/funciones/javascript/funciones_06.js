'use strict'
//Funciones flecha


function Sumame(numero1, numero2, sumaYmuestra,sumaPorDos){
	var sumar = numero1 + numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}

//se usa en jQuery
//pasando funciones anonimas como parametros a una funcion.
//sustituimos la palabra function por =>
Sumame(5,7,dato =>{
	console.log("La suma es",dato);
}, dato=>{
	console.log("La suma por 2 es: ",(dato*2));
}
);
