'use strict'
/* JSON: JavaScript Object Notation
nos permite crear objetos de forma sensilla
array asociativo(se usa mas para PHP, mongoDB)*/



window.addEventListener('load', function(){

var pelicula = {
	titulo: 'Batman',
	year: 2017,
	genero: 'comedia'
};


console.log(pelicula);

/*Si quiero acceder a un campo escribo*/

console.log(pelicula.titulo);

//cambiamos el valor
pelicula.titulo = "Superman";
//mostramos el nuevo valor
console.log(pelicula.titulo);


//Array de peliculas
var peliculas = [
{titulo: "Transformers", year:2006, genero: "accion"},
pelicula];

//muestro el array
var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append("Titulo: " + peliculas[index].titulo + " Año: " + peliculas[index].year + " Genero: " + peliculas[index].genero);
	caja_peliculas.append(p);
}


});




