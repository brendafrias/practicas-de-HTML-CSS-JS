'use strict'
//CALCULADORA
/*pide 2 numeros por pantalla
si ingresamos un numero erroneo que
lo vuelva a pedir, que muestre
en el body de la pagina y por la
consola el resultado de sumar
restar multiplicar y dividir esas
dos sifras*/


var numeroUno = 0;
var numeroDos = 0;
var resultado = 0;
var resultadoAlert = 0;


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


 function Suma(numeroUno, numeroDos, resultado){
	resultado = (numeroUno + numeroDos);
	return resultado;

}

function Resta(numeroUno, numeroDos, resultado){
	resultado = (numeroUno - numeroDos);
	return resultado;

}

function Multiplicacion(numeroUno, numeroDos, resultado){
	resultado = (numeroUno * numeroDos);
	return resultado;

}

function Divicion(numeroUno, numeroDos, resultado){
	resultado = (numeroUno / numeroDos);
	return resultado;

}

function MostrarTodo(){
	
	document.write("El resultado de la suma es: " +Suma(numeroUno,numeroDos));
	document.write("<br/>");
	document.write("El resultado de la resta es: " +Resta(numeroUno,numeroDos));
	document.write("<br/>");
	document.write("El resultado de la multiplicacion es: " +Multiplicacion(numeroUno,numeroDos));
	document.write("<br/>");
	document.write("El resultado de la divicion es: " +Divicion(numeroUno, numeroDos));
	document.write("<br/>");
}


resultadoAlert = "La suma es: " + (Suma(numeroUno,numeroDos,resultado))+ "\n" +
				 "La resta es: " + (Resta(numeroUno,numeroDos,resultado))+ "\n" +
				 "La multiplicacion es: " + (Multiplicacion(numeroUno,numeroDos,resultado))+ "\n" +
				 "La divicion es: " + (Divicion(numeroUno,numeroDos,resultado)) + "\n";

MostrarTodo();
alert(resultadoAlert);




