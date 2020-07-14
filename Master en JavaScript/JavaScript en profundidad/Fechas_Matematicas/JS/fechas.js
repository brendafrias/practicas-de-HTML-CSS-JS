'use strict'

window.addEventListener('load', function(){
	
	var fecha = new Date();
	document.write(fecha);//retornara el dia y hora

	var year = fecha.getFullYear();//obtenemos el año y lo guardamos en una variable
	var mes = fecha.getMonth();//obtenemos el mes, (empieza desde el mes 0).
	var dia = fecha.getDate();//obtenemos el numero de dia que es.

	//cadena de texto para mostrar por pantalla
	var textoHora =`
		El año es: ${year}
		El mes es: ${mes}
		El dia es: ${dia}
		`;

	document.write(textoHora + "<br>" + "<br>");

	//Numero aleatorio
	//document.write(Math.random()*10);//lo multiplicamos por 10 para que no sea 0,xxxx
	document.write(Math.ceil(Math.random()*10));//ceil es para sacarle los decimales
	//para mas funciones matematicas dirigace a https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math
	
});
