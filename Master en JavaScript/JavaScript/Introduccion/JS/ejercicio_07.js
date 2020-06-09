'use strict'
//SWITCH

//modificar el valor de edad para entrar en cada case.
var edad = 18;
var imprime = " ";

switch(edad){

	case 18:
		imprime = "acabas de cumplir 18 años";
			break;

	case 25:
		imprime = "ya eres adulto";
			break;

	case 40:
		imprime = "crisis de los 40";
			break;

	case 75:
		imprime = "eres un anciano";
			break;

	default:
		imprime = "tu edad es neutra";
			break;

}

//muestra el resultado segun en que case entro.
	console.log(imprime);

