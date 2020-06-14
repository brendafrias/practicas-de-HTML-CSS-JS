'use strict'
//arrays multidimencionales

var categorias = ["accion" , "terror" , "comedia"];
var peliculas = ["matrix" , "tiburon" , "madagascar"];

var cine = [categorias, peliculas];

//console.log(cine);
//document.write(cine);

document.write(cine[0][1]); //muestra terror

//operaciones con arrays
//en php solo seria peliculas[] = "batman";
//para aadir un elemento al array usamos el metodo push
var elemento;
do{
	elemento = prompt("introducir otra pelicula");
	peliculas.push(elemento);
}while(elemento !="acabar"){

}


//metodo pop saco el ultimo elemento del array
peliculas.pop();

//peliculas.push("batman");
//peiculas[0] = undefine; me lo pone como indefinido.
document.write(peliculas);

//borrar por indice
var index = peliculas.indexOf("matrix");

if(index >= 0){
	peliculas.splice(index,1);
}

document.write(peliculas);


//convertir un array a texto
var converString;
converString = peliculas.join();
document.write(converString);

//convertir un texto en un array
var peliculas_string = peliculas.join();
var cadena = "texto 1, texto 2, texto3";
var cadenaArrar = cadena.split(", ");
console.log(peliculas_string);

//ordenar un array
//metodo sort
peliculas.sort();
document.write("<br/>");
document.write(peliculas); //lo ordena de forma alfabetica
//metodo reverse (el orden inverso al array original);




//Recorrer un array mediante un for in
var lenguajes = new Array("php", "js", "c", "java");
for(let lenguaje in lenguajes){
	document.write("<li>" + lenguajes[lenguaje] + "</li>")
}

//Busquedas
var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "php";
});

document.write("</br>");
document.write(busqueda);

//reducido con la funcion de flecha

var busqueda1 = lenguajes.find(lenguaje => lenguaje == "php");

document.write(busqueda1);
//tambien podemos utilizar lenguajes.findIndex (esto nos dara el indice del elemento).

//metodo some()
//buscar si en el array hay algun elemento de un valor en especifico
var precios = [10,20,50,80,12];
var busqueda2 = precios.some(precio >= 20 );
//aca nos preguntamos si hay algun precio mayor o igual que 20
//esto retornara true o false segun si existe algun elemento o no
console.log(busqueda2);

