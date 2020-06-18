'use strict'
//evento load sirve para solucionar la carga de los scripts


//dentro de este evento ponemos todo el codigo que queremos usar
window.addEventListener('load', function(){


	//Codigo mas limpio

//Evento click
function cambiarColor(){
	var bg = boton.style.background;
	if(bg == "green"){
		boton.style.background = "red";
	}else{
		boton.style.background = "green";
	}
	
}

var boton = document.querySelector("#boton");
boton.addEventListener('click', function(){
	cambiarColor();
}); //añadimos un evento al boton en este caso click, de segundo parametro pondremos una funcion de callback
//en este caso la funcion cambiarColor , pero tambien la podemos definir ahi.



//Evento mouse over
//cuando pase por encima del boton lo cambio a #CCC
boton.addEventListener('mouseover', function(){
	boton.style.background = "#CCC";
});


//Evento mouseout
//cuando quite el moyse lo cambia a color black
boton.addEventListener('mouseout', function(){
	boton.style.background = "black";
});


});//cierre del evento load

