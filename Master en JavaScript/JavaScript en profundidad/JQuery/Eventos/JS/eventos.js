'use strict'
//EVENTOS CON JQUERY
$(document).ready(function(){
//MouseOver y MouseOut
var caja = $('#caja');
/*
caja.mouseover(function(){
	$(this).css("background", "red");
});

caja.mouseout(function(){
	$(this).css("background","green");
});
*/
//Al evento hover le podemos pasar 2 funciones, le pasaremos las funciones anteriores
//ahora no seran anonimas
function cambiarRojo(){
	$(this).css("background", "red");
}


function cambiarVerde(){
	$(this).css("background","green")
			.css("color","black");
}

//Hover
caja.hover(cambiarRojo,cambiarVerde);

//Evento Click u Doble Click

caja.click(function(){
	$(this).css("background","blue")
		   .css("color","white");
});

caja.dblclick(function(){
	$(this).css("background","pink")
		   .css("color","yellow");
});


//Evento Focus y Blur
var nombre = $("#nombre");
var datos = $("#datos");

nombre.focus(function(){
	nombre.css("border","2px solid blue");
});

nombre.blur(function(){
	nombre.css("border", "2px solid yellow");

	datos.text(nombre.val()).show();
});

//Mousedown y Mouseup
datos.mousedown(function(){
	$(this).css("border-color", "gray");
});

datos.mouseup(function(){
	$(this).css("border.color", "black");
});

//Mousemove
//Ahora haremos que el div follow se mueva como el raton
var seguir = $('#follow');//capturamos el div follow

//selecionamos todo el documento y llamamos al evento mousemove
$(document).mousemove(function(){
//dentro de la funcion de callback le cambiamos los parametros al div follow
//por las cordenadas del mouse del eje X e Y
	console.log(event.clientX);//mostramos cordenadas de x
	console.log(event.clientY);//mostramos cordenadas de y
	
	//Tambien podemos ocultar el cursor con:
	$('body').css("cursor","none");

	seguir.css("left",event.clientX);
	seguir.css("top",event.clientY);
});



});