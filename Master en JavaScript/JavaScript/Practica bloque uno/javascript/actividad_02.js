'use strict'

/*ejercicio: mostrar el promedio y 
la suma de los numeros 
introducidos por el usuario hasta 
que se ingrese un numero negativo 
y ahi mostrar los resultados*/

var suma = 0;
var contador = 0;
var numero = 0;
var promedio = 0;

do{
	numero = parseInt( prompt("Ingrese un numero"));
	if(isNaN(numero))
	{
		numero = 0;
	}else if( numero >= 0){
		suma = suma + numero;
		contador ++;
	}
	
}while(numero >=0)

promedio = suma / contador;

alert("el promedio es: "+ promedio);
