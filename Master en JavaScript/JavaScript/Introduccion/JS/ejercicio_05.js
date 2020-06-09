'use strict'
//OPERADORES
// + - * / %
//% = es el resto de la operacion entre 2 numeros
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;

alert("El resultado de la operacion es: "+operacion);


//TIPOS DE DATOS
//entero, string, float, bool
var numeroEntero = 44;
// para usar comillas dentro de una cadena usamos las comillas simples ''
var cadenaDeTexto = "soy una cadena, 'yo soy las comillas'";
var booleano = true; // (true o false), (1,0).


//usamos la funcion parseInt para convertir la cadena de texto en un numero
var numeroFalso = "33";
//parseInt();

console.log(parseInt(numeroFalso)+7);

//es usado para convertir un numero en string, ej de uso: para concatenar.
console.log(String(numeroEntero)+4)

////////////////////////////////////////////
//typeof: es usado para identificar de que tipo es un dato.
console.log(typeof numeroEntero); //tipo number.
console.log(typeof cadenaDeTexto);// tipo string.
console.log(typeof booleano); //tipo boolean.


