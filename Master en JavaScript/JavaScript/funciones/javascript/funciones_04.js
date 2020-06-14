'use strict'
//PARAMETROS REST Y SPREAD


/* poniendo 3 puntos en el parametro final
nos permite meter todos los valores en una array */
function ListadoFrutas(fruta1, fruta2,...restoDeFrutas){
	console.log("Fruta 1: ",fruta1);
	console.log("Fruta 2: ",fruta2);
	console.log("Resto de frutas: ",restoDeFrutas);
}

ListadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");


var frutas = ["naranja", "manzana"];
/* poniendo los 3 puntos delante hago un spread
esto hace que si yo meto un array me lo separe*/
ListadoFrutas(...frutas, "Sandia", "Pera", "Melon");