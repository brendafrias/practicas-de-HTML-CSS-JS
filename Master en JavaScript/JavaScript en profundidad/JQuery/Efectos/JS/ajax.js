'use strict'
$(document).ready(function(){
	//Load nos permite hacer una peticion ajax por GET e incrustar cualquier elementos que tenga en la pagina
	//$('#datos').load("https://reqres.in/");
	//metemos el contenido en un div.

	//Get y Post

	//GET
	$.get("https://reqres.in/api/users",{page: 2}, function(response){
		console.log(response);
		response.data.forEach((element,index)=>{
			$('#datos').append("<p>"+element.first_name+" "+element.last_name+"</p>");
		});
	});

	//POST
	

	//////////////////////////
	$("#formulario").submit(function(e){
		e.preventDefault();//capturo el evento para que no me enviee a otra pagina.
		var usuario = {
		"name": $('input[name="name"]').val(),
		"web": $('input[name="web"]').val()		
	};
	console.log(usuario);//vemos que se va a enviar
	$.post($(this).attr("action"),usuario,function(response){
		console.log(response);
		}).done(function(){
			alert("Usuario agregado correctamente");
		});
		return false;//usado para que tampoco redirija
	});
});