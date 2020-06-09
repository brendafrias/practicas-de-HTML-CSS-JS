'use strict'

/* relizar un programa que nos pida dos numeros
y nos diga cual es mayor, cual es menor y si
son iguales si no son numeros o son menores o iguales a cero volver a pedir los datos*/

var numeroUno = 0;
var numeroDos = 0;

// isNaN ES UNA FUNCION QUE ANALIZA QUE EL CONTENIDO NO SEA UN NUMERO

do{
	numeroUno = prompt("Ingrese el primer numero");
	numeroDos = prompt("Ingrese el segundo numero");
}while((isNaN(numeroUno)) || (isNaN(numeroDos)) || (numeroUno <= 0) || (numeroDos <= 0))

if (numeroUno == numeroDos) {
	alert("Los numeros: "+ numeroUno + " y "+ numeroDos + " son iguales");
}else{

	if (numeroUno > numeroDos) 
	{
		alert("el numero: "+ numeroUno + " es mayor" + " y el numero: " + numeroDos + " es menor");
	}else{

		if(numeroDos > numeroUno)
		{
			alert("el numero: "+ numeroDos + " es mayor" + " y el numero: "+ numeroUno + " es menor");
		}else{
			alert("no ingreso un numero");
		}
		

		}
}
