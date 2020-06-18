'use strict'
//Eventos
//es una funcion que se ejecuta cuando sucede algo.


//PARTE EXTRAIDA DEL INDEX:
//<button id="boton" onclick="cambiarColor();" >Precioname</button>


//Mouse (cuando hacemos click, cuando pasemos por el elemento y cuando salgamos del elemento).

/*
var boton = document.querySelector("#boton");

//Creamos una funcion que cambie el color

function cambiarColor(){
	var bg = boton.style.background;
	if(bg == "green"){
		boton.style.background = "red";
	}else{
		boton.style.background = "green";
	}
	
}

//ahora modificamos la funcion para que le ingrese por parametro el color que quiera

function cambiarColorMejorado(color){
	boton.style.background = color;
}
//ahora cambiamos en el html el evento onclick y le ponemos esta funcion.
*/
////////////////////////////////////////////////////////////////////
//para evitar el codigo spaguetti trabajaremos con eventos dentro del js


//Codigo mas limpio


function cambiarColor(){
	var bg = boton.style.background;
	if(bg == "green"){
		boton.style.background = "red";
	}else{
		boton.style.background = "green";
	}
	
}

//Evento click
var boton = document.querySelector("#boton");
boton.addEventListener('click', function(){
	cambiarColor();
	//this.style.background = "blue";
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

