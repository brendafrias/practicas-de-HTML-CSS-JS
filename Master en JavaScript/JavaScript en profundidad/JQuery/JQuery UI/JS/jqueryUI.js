'use strict'
//Para utilizar JQuery UI nos dirijimos a: https://jqueryui.com/
//descargamos y pegamos la carpeta en nuestro proyecto,
//luego añadimos el script en html.
$(document).ready(function(){
	//Mover elemento por la pagina.
	$('.elemento').draggable();

	//Redimencionar
	$('.elemento').resizable();

	//Seleccionar y ordenar
	//$('.lista-seleccionable').selectable(); //lo comentamos porque solo se puede usar uno por elemento
	$('.lista-seleccionable').sortable({
		update: function(event,ui){
			console.log("ha cambiado la lista");
		}
	});

	//DROP
	$('#elemento-movido').draggable();
	$('#area').droppable({
		drop: function(){
			console.log("Has soltado algo dentro del area");
		}
	});

	//Efectos
	$('#mostrar').click(function(){
		//$('.caja-efectos').toggle("fade");
		//$('.caja-efectos').toggle("explode");
		//$('.caja-efectos').toggle("blind");
		//$('.caja-efectos').toggle("slide");
		//$('.caja-efectos').toggle("fold");
		//$('.caja-efectos').toggle("puff");
		//$('.caja-efectos').toggle("scale");
		$('.caja-efectos').toggle("shake"); // tambien podemos pasarle como parametro la velosidad.
	});

});