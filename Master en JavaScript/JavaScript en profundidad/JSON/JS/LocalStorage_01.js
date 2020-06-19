'use strict'

/*El LocalStorage es una memoria que permanece mientras
navego en la pagina web*/

window.addEventListener('load', function(){

	//para comprobar que el localstore esta disponible
	if(typeof(Storage) != 'undefined'){
		console.log("LocalStorage disponible");
	}else{
		console.log("LocalStorage no disponible");
	}
	/*Lo podemos controlar entrando a Application
	file:// seria el dominio*/

	//Guardar datos en el LocalStorage key(titulo) value(informacion)
	localStorage.setItem("titulo", "Informacion");

	//Recuperar elemento y usarlo nombre del indice(titulo)
	localStorage.getItem("titulo");


	//Se lo pasamos al div id= "peliculas", lo cambia por "informacion"
	document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");


	//Guardar objeto json hay que convertir los objetos a string para poder enviar los datos(json.string o numero)
	var usuario = {
		nombre: "brenda",
		email: "befri_@hotmail.com",
		web: "www.google.com"
	};

	//para convertir el obj.json a json.string usamos JSON.stringify(objeto)
	localStorage.setItem("usuario", JSON.stringify(usuario));


	//Recuperar obj jsonstring, ahora convertimso el string en obj
	var userjs = JSON.parse(localStorage.getItem("usuario"));

	console.log(userjs);

	document.querySelector("#datos").append("Nombre: " + userjs.nombre + " Email: " + userjs.email + " Web: " + userjs.web);

	//Borrar item del localstorage
	localStorage.removeItem("usuario");
	//Vaciar el localstorage
	localStorage.clear();


});