'use strict'
/*mostrar todos los numeros 
divisores de otro numero 
introducido por pantalla */


var numeroUno = 0;
var numeroDos = 0;
var eliminacionUno = 0;
var eliminacionDos = 0;
var numeroDivisor = 1;

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

numeroDivisor = parseInt( prompt("Ingrese el numero divisor"));

while(isNaN(numeroDivisor) || (numeroDivisor <= 0)){
	alert("Ingreso un numero menor o igual que 0 o no ingreso un numero");
	numeroDivisor = parseInt( prompt("Reingrese el segundo numero"));
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
			if((numeroUno%numeroDivisor ==0) && (eliminacionUno != numeroUno)){
				console.log(numeroUno);
			}
		}

	}else{
		if (numeroDos < numeroUno) {
			for (numeroDos ; numeroDos < numeroUno  ; numeroDos++) {
			//console.log(numeroDos+1);


			if((numeroDos%numeroDivisor == 0) &&(eliminacionDos != numeroDos)){
				console.log(numeroDos);
			}
		}

		}
	}
}

//UNA MANTEQUITA