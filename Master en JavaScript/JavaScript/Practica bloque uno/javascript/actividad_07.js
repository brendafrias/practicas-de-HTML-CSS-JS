'use strict'

//tabla de multiplicar de un numero introducido
var numeroUno = 0;


function multiplicacion(){

	numeroUno = parseInt( prompt("Ingrese el primer numero"));

while(isNaN(numeroUno) || (numeroUno <0)){
	alert("Ingreso un numero negativo o no ingreso un numero");
	numeroUno = parseInt( prompt("Reingrese el primer numero"));
}

for (var i = 0; i <= 10; i++) {
	
	document.write(i + " x " + numeroUno + " = "+ (i*numeroUno) + "<br/>"); 
}
}

multiplicacion();


//burbujero

function todasLasTablas(){
	for (var i = 0; i <= 10; i++) {
		document.write("<h1> Tabla del "+ i + "</h1>");
		for (var j = 0; j <= 10; j++) 
		{
			document.write(j + " x " +i+ " = " + (i*j)+ "<br/>");

		}

		 

	}
}

todasLasTablas();

