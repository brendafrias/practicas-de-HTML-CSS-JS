'use strict'
$(document).ready(function(){
	var caja = $('#caja');

	$('#mostrar').hide();
	
	$('#mostrar').click(function(){
		$(this).hide();
		$('#ocultar').show();
		caja.fadeIn('fast');
	});

	//Callback en efectos
	$('#ocultar').click(function(){
		$(this).hide();
		$('#mostrar').show();
		caja.fadeOut('fast',function(){
			console.log("callback en efectos");//se moestrara una vez que acabe la animacion.
		});
		//fadeTo('slow',0);
	});

	$('#todoenuno').click(function(){
		caja.slideToggle('fast');
		//toggle
		//fadeToggle
		//sliedeToggle
	});

	$('#animame').click(function(){
		caja.animate({marginLeft: '500px',
					fontSize: '40px',
					height: '120px'
		},'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '80px'
		},'slow')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		},'slow')
		.animate({
			borderRadius: '100px',
			marginTop: '0px'
		},'slow')
		;
	});
});