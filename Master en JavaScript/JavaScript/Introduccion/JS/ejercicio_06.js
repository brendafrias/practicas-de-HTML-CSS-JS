'use strict'
//CONDICIONALES
//nos sirven para hacer comparaciones y ejecutar acciones segun la respuesta.
//ej: si A es = a B entonces haz esto(sumar).
//OPERADORES RELACIONALES
// mayor >
// menor <
// mayor o igual >=
//menor o igual <=
// igual ==
//distinto !=

//EJEMPLO NRO 1:
var edadUno = 30;
var edadDos = 12;


//comparamos si edadUno es mayor que edadDos
if (edadUno > edadDos) {
	//se ejecuta la siguiente linea de codigo
	console.log("Edad uno es mayor que edad dos");
}else{
	console.log("Edad dos es mayor");
}


//EJEMPLO NRO 2:
var edad = 18;
var nombre = "David Suarez";

//en este caso lo comparamos con un numero constante predeterminado
if (edad >= 18) {
	console.log(nombre +" es mayor de edad y tiene "+edad+ " años");
}else{
	//en el caso de que edad sea menor que 18 entrara en el else.
	console.log(nombre +" es menor de edad");
}

//IF AÑIDADOS
//realizar pruebas cambiando la variable edad con diferentes valores para que entre en cada uno de los bloques
// para que entre en el primer if edad = 33
//para que entre en el primer else y segundo if edad = 18 o mas
//para que entre en el else else edad = 17 o menor.

if (edad== 33)
{
	//en el caso que la edad sea 33 entrara en el primer if
	console.log("tiene exactamente 33 años");
}else{
		if (edad >= 18) 
		{
			//en el caso de que no entre en el primero comprobara en el segundo if si es mayor de edad.
			console.log("es mayor de edad");
		}else
		{
			//en el caso de que no se cumpla el primero ni el segundo if caera en el ultimo else
			console.log("es menor de edad");
		}
	}

	


/////////////////////////////////////////////////////
//OPERADORES LOGICOS
// && (and)
//ej de and
//EJERCICIO DE PRUEBA
//COMPROBAR SI EL USUARIO ES MAYOR DE EDAD Y A LA VEZ SI ES MENOR DE CIERTA EDAD

if ((edad >= 18) && (edad < 60)) {
	//solo entrara si se cumplen ambas condiciones.
	//los numeros entre 18 y 60.
	console.log("es mayor de edad y tiene menos de 60 años");
} 

// || (or)
//en este caso entrara al if si se cumple una o las dos condiciones.
//ej de or
var nombre = "brenda";

if ((nombre == "brenda") || (nombre == "belen")) {
	//solo entra si nombre es brenda o belen
	console.log("el nombre es: "+nombre);
}else{
	//entrara cuando el nombre no sea ni brenda ni belen.
	console.log("el nombre no es brenda ni belen");
}

// != (not)
//ej de not
var year = 2018;
if (year != 2016) {
	//solo entra si year es caulquier numero menos 2016.
	console.log("el año no es 2016");
}




