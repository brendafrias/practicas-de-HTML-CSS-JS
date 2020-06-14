'use strict'
//FUNCIONES
//funciones dentro de otra



function PorConsola(numero1, numero2){
			console.log("Suma: " + (numero1+numero2));
			console.log("Resta: " + (numero1 - numero2));
			console.log("Multiplicacion: " + (numero1*numero2));
			console.log("Divicion: " + (numero1 / numero2));
			console.log("*********************************");

}

function PorPantalla(numero1, numero2){
			document.write("Suma: " + (numero1+numero2) + "<br/>");
			document.write("Resta: " + (numero1 - numero2) + "<br/>");
			document.write("Multiplicacion: " + (numero1*numero2) + "<br/>");
			document.write("Divicion: " + (numero1 / numero2) + "<br/>");
			document.write("*********************************" + "<br/>");


}


/*
function Calculadora(numero1, numero2, mostrar=false){

	if(mostrar == false){
			console.log("Suma: " + (numero1+numero2));
			console.log("Resta: " + (numero1 - numero2));
			console.log("Multiplicacion: " + (numero1*numero2));
			console.log("Divicion: " + (numero1 / numero2));
			console.log("*********************************");
	}else{
			
	}



}


Calculadora(1,4);
Calculadora(1,4, true);

*/

function Calculadora(numero1, numero2, mostrar = false){
	if(mostrar == false){
		PorConsola(numero1, numero2);
	}else{
		PorPantalla(numero1, numero2);
	}
}

Calculadora(1,4);

Calculadora(2,5, true);