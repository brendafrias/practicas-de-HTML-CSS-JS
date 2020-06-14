'use strict'
//Ejercicio con arrays
/*
1. pida 6 nuemros por pantalla y los meta en una array
2. tiene que mostrar el array entero (todos sus elementos).
en el body de la pagina y en la consola
3. ordenar el array y mostrarlo
4.invertir su orden y mostrarlo
5.mostrar cuantos elementos tiene el array
6. una busqueda de un valor introducido por el usuario
y que nos diga si esta en el array y si lo encuentra q nos
diga su indice.*/


function MostrarArray(elementos, textoCustom = " "){
	document.write("<h1>Contenido del array"+textoCustom+ "</h1>");
	document.write("<ul>");
	elementos.forEach((elemento, index) =>{
		document.write("<li>"+elemento+"</li>");
	});
	document.write("</ul>");
}





var numero;
var numeros = new Array(6);
var cantidad = 0;

//pedir los numeros y guardarlos en el array
for(var i = 0; i<=5;i++){
	numeros[i] = parseInt(prompt("Introduce un numero",0));
	//numeros.push = parseInt(prompt("introduce un numero"));
}


/*
do{
	numero = parseInt(prompt("Ingrese un numero"));
	
		numeros.push(numero);
		cant++;


	
} while(numeros.length != 6)
*/

//MOSTRAR EL ARRAY POR CONOLA Y BODY
//document.write(numeros);
console.log(numeros);
MostrarArray(numeros);


//ORDENAR EL ARRAY Y MOSTRARLO
document.write("</br> array ordenado: </br>");
numeros.sort();
//document.write(numeros);
MostrarArray(numeros," ordenado");

numeros.sort(function(a, b){return a-b});
MostrarArray(numeros," ordenado decendente");

numeros.sort(function(a, b){return b-a});
MostrarArray(numeros," ordenado ascendente");


//INVERTIR EL ARRAY Y MOSTRARLO
numeros.reverse();
//document.write(numeros);
MostrarArray(numeros," ordenado invertido");


//Cantidad de elemenos del array
document.write("<h1>el array tiene: " + numeros.length + " elementos</h1>");


//BUSQUEDA
var busqueda = parseInt(prompt("busca un numero", 0));
var posicion = numeros.findIndexOf(numero => numero == busqueda);

if(posicion && busqueda != -1){
	document.write("<h1>ENCONTRADO</h1>");
	document.write("<h1>Posicion de la buscada: "+ posicion + "</h1>");

}else{
	document.write("<h1>no encontrado</h1>");
}


