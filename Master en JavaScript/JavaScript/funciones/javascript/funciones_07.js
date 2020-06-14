'use strict'

/*
//Transformacion de textos
var numero = 44;
var texto1 = "hola";
var texto2 = "ggggggg";
var cant = 0;

var dato = numero.toString();

	dato = texto1.toUpperCase();//pasado a mayuscula.
	dato = texto1.toLowerCase();//pasado a minuscula.


//calcular longitud

cant = (texto2.length);//la cantidad de carateres del string.

console.log(cant);
*/


//BUSQUEDA
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "hola mundo";

var busqueda = texto1.indexOf("curso");
console.log(busqueda);
//lastIndexOf (muestra desde atras).

//metodo search
var busqueda = texto1.search("de");//si buscamos una palabra que no existe nos reotrnara -1.

//metodo match (al poner /g busca en global).
var busqueda = texto1.match(/al/g);

//metodo substr (14,5) 14 es de donde quiero que empiece
//a sustrar la informacion y 5 la cantidad de carateres que va tomar.
var busqueda = texto1.substr(14,5);

console.log(busqueda);//mostrara la palabra curso.

//charAt(5) (un caracter en especifico);
//startWith("Bienvenido") lanza true si es por lo que empieza el string.
//texto1.includes("JavaScript"); //busca si existe una palabra.


//////////////////////////////////////////////////////////////////////////////////////

//Reemplazo.
texto1.replace("JavaScript", "PHP"); //reemplaza la primera palabra por la segunda.
texto1.slice(14); //recorta el texto
texto1.slice(5,20); //recorta del caracter 5 al 20
texto1.split(" "); //me lo convierte en un array que separa todas las palabras y las mete en un indice.
texto1.trim();//quita los espacios de adelante y atras que tenga el texto.
//limpia el espacio sobrante del texto.
