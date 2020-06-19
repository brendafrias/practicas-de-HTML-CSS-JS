'use strict'

//Evento de carga del script
window.addEventListener('load', function(){
	//Obtener formulario #formPeliculas
	var formulario = document.querySelector("#formPeliculas");
	
	//Evento submit usado para añadir una pelicula al localStorage
	formulario.addEventListener('submit', function(){
		var pelicula = document.querySelector("#addPelicula").value;
		
		//Comprueba que el input text no este vacio
		if(pelicula.length >= 1){
			//Añade al localStoage la pelicula
			localStorage.setItem(pelicula,pelicula);
		}
	});	

	//Elemento de html ul para mostrar el listado del localStorage
	var ul = document.querySelector("#peliculasList");
	for(var i in localStorage){
		console.log(localStorage[i]);
		//Comprabamos que sea un string
		if(typeof localStorage[i] == 'string'){
			var li = document.createElement("li");//creamos un elemento de html tipo li
			li.append(localStorage[i]);
			ul.append(li);
		}
		
	}

	//Formulario para borrar peliculas
	var formularioB = document.querySelector("#borrarPeliculas");
	formularioB.addEventListener('submit', function(){
		//Capturamos el input de la pelicula que queremos borrar
		var titulo = document.querySelector("#borrarPelicula").value;

		//Comprobamos que no este vacio
		if(titulo.length >= 1){
			//Removemos la pelicula del localStorage
			localStorage.removeItem(titulo,titulo);
		}
	});
});