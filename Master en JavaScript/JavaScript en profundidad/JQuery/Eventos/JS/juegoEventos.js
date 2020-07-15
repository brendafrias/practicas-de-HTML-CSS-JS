'use strict'
//Cargamos jquery
$(document).ready(function(){

	var mira = $('#Mira');//Guardamos el div de Mira, para luego hacer que se mueva segun el evento mousemove
	var disparo = document.getElementById('Disparo');//Guardamos el div Disparo, para luego cuando se haga click ejecutar el audio de disparo
	var fondo = $('#Fondo');//Tomamos el fondo para usar el evento mousemove sobre este div
	var puntos = $('#Puntos');
	var enemigo = $('#Enemigo');
	var contadorPuntos = 0;


	/*Dentro del div fondo llamamos a la funcion mousemove para asignarle
	los valores del mouse a la mira, tambien borramos el raton del div*/
	fondo.mousemove(function(){
		fondo.css("cursor","none");

		mira.css("left", event.clientX);
		mira.css("top", event.clientY);

	});

	/*Usamos el evento click del div fondo y ejecutamos el audio del disparo al hacer click*/
	fondo.click(function(){
		disparo.play();		
	});

	/*Usamos el evento click del div enemigo para saber cuando clickeamos sobre el enemigo,
	sumamos el contador de puntos, y luego lo mostramos en el div de puntos*/
	enemigo.click(function(){
		contadorPuntos = contadorPuntos +1;
		puntos.text("Puntuacion: " + contadorPuntos).show();
	
	});	
});