'use strict'
/* mostrar todos los numeros 
impares que esten entre dos numeros
 introducidos por el usuario */
var numeroUno = 0;
var numeroDos = 0;
var eliminacionUno = 0;
var eliminacionDos = 0;

numeroUno = parseInt( prompt("Ingrese el primer numero"));

while(isNaN(numeroUno) || (numeroUno <0)){
	alert("Ingreso un numero negativo o no ingreso un numero");
	numeroUno = parseInt( prompt("Reingrese el primer numero"));
}


numeroDos = parseInt( prompt("Ingrese el segundo numero"));

while(isNaN(numeroDos) || (numeroDos < 0)){
	alert("Ingreso un numero negativo o no ingreso un numero");
	numeroDos = parseInt( prompt("Reingrese el segundo numero"));
}

//variables auxiliares para no escribir el numero menor
eliminacionUno = numeroUno;
eliminacionDos = numeroDos;

if(numeroUno == numeroDos){
	alert("Los numeros son iguales por lo tanto no hay ningun numero entre ellos");
}else{
	if (numeroUno < numeroDos) {
		for (numeroUno ; numeroUno < numeroDos  ; numeroUno++) {
			//console.log(numeroUno+1);
			if((numeroUno%2 !=0) && (eliminacionUno != numeroUno)){
				console.log(numeroUno);
			}
		}

	}else{
		if (numeroDos < numeroUno) {
			for (numeroDos ; numeroDos < numeroUno  ; numeroDos++) {
			//console.log(numeroDos+1);


			if((numeroDos%2 != 0) &&(eliminacionDos != numeroDos)){
				console.log(numeroDos);
			}
		}

		}
	}
}

//UNA MANTEQUITA