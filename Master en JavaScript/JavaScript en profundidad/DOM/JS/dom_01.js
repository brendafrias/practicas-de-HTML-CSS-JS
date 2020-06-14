'use strict'
//DOM
//con javascript podemos manipular el html como queramos


//podemos usar esta funcion llamandola en la consola
//veremos como cambiamos el color en vivo ej: cambiaColor("purple");
function cambiaColor(color){
	caja.style.background = color;
}


var caja = document.getElementById("micaja");
console.log(caja);

//tambien podemos capturar el html con .innerHTML

//var caja = document.getElementById("micaja").innerHTML;

//puedo modificar todas las propiedades.
//puedo modificar el html desde js
caja.style.background = "red";
caja.style.padding = "20px";
caja.ClassName = "hola";
console.log(caja);
///////////////////////////////////
//querySelector(el id del elemento que queremos modificar)
var caja = document.querySelector("#micaja");



