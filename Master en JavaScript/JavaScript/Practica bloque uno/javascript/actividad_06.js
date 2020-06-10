'use strict'

/* que nos diga si un numero 
es par o impar */


var numeroUno = 0;

numeroUno = parseInt( prompt("Ingrese el primer numero"));

while(isNaN(numeroUno) || (numeroUno <0)){
	alert("Ingreso un numero negativo o no ingreso un numero");
	numeroUno = parseInt( prompt("Reingrese el primer numero"));
}

if(numeroUno%2 == 0){
	alert("es par");
}else{
	alert("es impar");
}