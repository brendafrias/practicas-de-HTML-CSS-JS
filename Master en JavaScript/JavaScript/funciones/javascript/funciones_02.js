'use strict'
//FUNCIONES
//parametros opcionales

//segun la cantidad de parametros que le pase.
function Calculadora(numero1, numero2, mostrar=false){

	if(mostrar == false){
			console.log("Suma: " + (numero1+numero2));
			console.log("Resta: " + (numero1 - numero2));
			console.log("Multiplicacion: " + (numero1*numero2));
			console.log("Divicion: " + (numero1 / numero2));
			console.log("*********************************");
	}else{
			document.write("Suma: " + (numero1+numero2) + "<br/>");
			document.write("Resta: " + (numero1 - numero2) + "<br/>");
			document.write("Multiplicacion: " + (numero1*numero2) + "<br/>");
			document.write("Divicion: " + (numero1 / numero2) + "<br/>");
			document.write("*********************************" + "<br/>");
	}



}


Calculadora(1,4);
Calculadora(1,4, true);