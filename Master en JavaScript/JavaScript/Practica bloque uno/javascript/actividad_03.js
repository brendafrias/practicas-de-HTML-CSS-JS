'use strict'
/* realizar un programa que muestre
todos los numeros que hay entre
dos numero que ingrese el usuario*/

var numeroUno = 0;
var numeroDos = 0;

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

if(numeroUno == numeroDos){
	alert("Los numeros son iguales por lo tanto no hay ningun numero entre ellos");
}else{
	if (numeroUno < numeroDos) {
		for (numeroUno ; numeroUno < numeroDos -1 ; numeroUno++) {
			console.log(numeroUno+1);
		}

	}else{
		if (numeroDos < numeroUno) {
			for (numeroDos ; numeroDos < numeroUno -1 ; numeroDos++) {
			console.log(numeroDos+1);
		}

		}
	}
}

//UNA MANTEQUITA