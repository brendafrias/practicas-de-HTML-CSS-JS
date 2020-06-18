
/*		1)Formulario campos: Nombre,Apellidos y edad.
		2) boton de enviar el formulario(evento submit).
		3)Mostrar datos por pantalla.
		4) validar el formulario
*/

//Evento de carga script
window.addEventListener('load', function(){

	var formulario = document.querySelector('#formulario');
	//usado para ocultar el box dashed.
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";

	//Evento submit
	formulario.addEventListener('submit', function(){
	console.log("evento submit capturado");//prueba de ejecucion de evento submit

	//capturamos los input text en variables
	var nombre = document.querySelector('#nombre').value;
	var apellido = document.querySelector('#apellido').value;
	var edad = parseInt(document.querySelector('#edad').value);

	if (nombre.trim() == null || nombre.trim().length == 0) {
		alert("El nombre no es valido");
		return false;
	}

	if (apellido.trim() == null || apellido.trim().length == 0) {
		alert("El nombre no es valido");
		return false;
	}

	if (edad == null || edad <= 0 || isNaN(edad)) {
		alert("la edad no es valida");
		return false;
	}

	//desbloqueamos el box dashed
	box_dashed.style.display = "block";

	//Array para mostrar la informacion de los inputs
	var datos_usuario =	[nombre,apellido,edad];

	//bucle para agregar los datos del usuario, y mostrarlos en el box_dashed
	for(var indice in datos_usuario){
		var parrafo = document.createElement("p");
		parrafo.append(datos_usuario[indice]);
		box_dashed.append(parrafo);
	}


	
	});
	
});
