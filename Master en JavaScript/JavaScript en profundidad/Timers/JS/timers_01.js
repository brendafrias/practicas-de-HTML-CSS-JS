'use strict'

//Evento load para iniciar el script al principio.
window.addEventListener('load', function(){

	//TIMERS
	//set interval (permite ejecutar una funcion de callback cada tantos segundos)
	
	//tambien existe el setTimeOut se ejecuta y cierra
	var tiempo = setInterval(function(){
		console.log("Set Interval ejecutado");



	var titulo = document.querySelector("#titulo").style.background = "red";
			
	},3000);//en el segundo parametro va el tiempo


	
	var tiempo1 = setInterval(function(){
		console.log("Set Interval ejecutado");


	
	var titulo1 = document.querySelector("#titulo").style.background = "blue";
			
	},4000);//en el segundo parametro va el tiempo


	//Invocamos al boton de stop

	var stop = document.querySelector("#boton");

	stop.addEventListener("click", function(){
		alert("has parado el intervalo en bucle");
		clearInterval(tiempo);
	});


});