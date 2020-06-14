'use strict'
//IMPORTANTE PARA REALIZAR LOS TEST COMENTAR LOS FRAGMENTOS DE CODIGO YA QUE EL CODIGO FINAL AFECTARA A LOS DEMAS DIVS
//DOM

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");

var contenidoEnTexto = todosLosDivs[2]; //extraemos el cotenido del array todosLosDivs numero 3 y lo guardaamos en una variable

/*
console.log(todosLosDivs); //muestro todos los divs
//tambien puedo usar innerHTML
console.log(todosLosDivs[2].textContent); //muestro por consola en formato de texto lo que hay en el array todosLosDivs en la posicion 3

contenidoEnTexto.innerHTML = "cambio el texto"; // modifico el texto del div

console.log(contenidoEnTexto); //muestro como quedo el texto modificado

console.log(todosLosDivs[2]); //muestro que tambien se modifico en el array
/////////////////////////////////
//ahora le cambiamos el color
contenidoEnTexto.style.background = "red";
console.log(contenidoEnTexto);
*/
//MOSTRAR TODOS LOS DIVS CON UN FOR IN

var valor;
var seccion = document.querySelector("#miseccion"); //variable creada para llamar a la seccion especifica
var hr = document.createElement("hr"); // creo un elemento hr del tipo HTML


//recorro el array para mostrar todos los divs
for(valor in todosLosDivs){

	//este if fue creado para que solo me muestre los divs que yo cree, existen otros divs fantasmas con valor undefine
	if(typeof todosLosDivs[valor].textContent == 'string'){ //aca comprobamos que lo que contengan los divs sea un string
		var parrafo = document.createElement("p");//creo un elemento parrafo del tipo HTML
		var texto = document.createTextNode(todosLosDivs[valor].textContent);//creo un elemento del tipo textNode y le asigno el array todosLosDivs en formato texto
		parrafo.appendChild(texto);// o solo append o prepend (funciona igual append añade despues y prepend añade antes)
		seccion.append(parrafo);
	}
	
}

seccion.append(hr);



/*
todosLosDivs.forEach((valor, indice) =>{
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(valor);
	parrafo.appendChild(texto);
	document.querySelector("#miseccion").appendChild(parrafo);
});
*/


//Conseguir elementos por su clase

//creamos una variable para obtener los divs de className "rojo"
var divsRojos = document.getElementsByClassName('rojo');

//creamos una variable para obtener los divs de className "amarillo"
var divsAmarillos = document.getElementsByClassName('amarillo');

//mostramos los divs amarillos
console.log(divsAmarillos);

//cambiamos el color del unico div amarillo (este cambiara en todas las partes del programa).
divsAmarillos[0].style.background = "yellow";

//mostramos los divs rojos que obtenimos
console.log(divsRojos);

//no me deja de este modo porq son muchos elementos
//divsRojos.style.background = "red"; 
//asi que tendremos que crear un bucle para asignarles el color o en el caso que sean pocos 1 por 1

for(var div in divsRojos){
	//console.log(divsRojos[div]); muestro por consola cada iteracion
	
	//tenemos que crear un if para que no se filtren otros divs
	if(divsRojos[div].className == "rojo"){ //verifica que sea el div rojo
		divsRojos[div].style.background = "red";
	}
	
}


//PROBAMOS Query selector
var id = document.querySelector("#encabezado");


console.log(id);

//ahora le cambiamos el color al h1 #encabezado
id.style.background = "blue";

//ahora probamos si puedo sacar un array con Query
var clasesRojo = document.querySelector(".rojo");
console.log(clasesRojo);//en la consola me muestra solo 1
//conclucion solo sirve usar el querySelector si solo necesitamos 1

//Hay otro metodo querySelectorAll() que nos permite seleccionar todos
//este metodo devuelve una nodeLisr estatica(no viva) que representa una lista de elementos
//del documento que coinciden con el grupo de selectores indicados elementList = parentNode.querySelectorAll(selectors);
/*
selectors
Un DOMString que contiene uno o más 
selectores para buscar coincidencias. 
Esta cadena de texto debe ser una cadena CSS selector 
válida; si no lo es, se lanzará una 
excepción SyntaxError. Vea Locating DOM
elements using selectors para más información 
acerca de utilizar selectores para identificar 
elementos. Se pueden especificar varios selectores 
separándolos utilizando comas.
*/


/*
Valor devuelto
Una NodeList no viva que contenga un objeto Element 
para cada elemento que coincida con al menos uno de 
los selectores especificados o una NodeList vacía en 
caso de que no haya coincidencias.
*/

//INTENTANDO USAR querySelectorAll();

console.log("prueba de querySelectorAll");
var pruebaDivsRojos = document.querySelectorAll('div.rojo');
console.log(pruebaDivsRojos);

//prueba de si podemos cambiar el color de los elementos de la list
//pruebaDivsRojos.style.background = "green"; el mismo error de que se filtran otros elementos

//CREAMOS UN FOR para solucionarlo

for(var div in pruebaDivsRojos){
	//console.log(pruebaDivsRojos[div]); muestro por consola cada iteracion
	
	//tenemos que crear un if para que no se filtren otros divs
	if(pruebaDivsRojos[div].className == "rojo"){ //verifica que sea el div rojo
		pruebaDivsRojos[div].style.background = "green";
	}
	
}

//Conclucion: se pueden obtener de las 3 formas y en las 3 formas esta el mismo "problema" de filtrado, con query podemos especificar que buscar mientras q los otros son de un tipo en especifico



