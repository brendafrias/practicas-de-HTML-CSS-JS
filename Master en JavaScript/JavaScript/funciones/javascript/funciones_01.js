'use strict'
//FUNCIONES

/* Ejemplo de una funcion

Es una agrupacion reutilizable
de un conjunto de instrucciones.

function Calculadora(){
	document.write("Soy la calculadora");

		return "retorno de la funcion";
}


console.log(Calculadora());

alert(Calculadora());

*/
/*
var numeroUno = parseInt(prompt("Ingrese el primer numero"));
var numeroDos = parseInt(prompt("Ingrese el segundo numero"));
*/

function Calculadora(numero1, numero2){
	console.log("Suma: " + (numero1+numero2));
	console.log("Resta: " + (numero1 - numero2));
	console.log("Multiplicacion: " + (numero1*numero2));
	console.log("Divicion: " + (numero1 / numero2));

}




for (var i = 1; i <= 10; i++) {
	Calculadora(i,8);
}
