'use strict'
//WHILE
/*es parecido al for, pero menos
 estricto, puede llegar a ser infinito si 
 la condicion nunca se cumple */

 var year = 2020;

//es necesario aumentar o disminuir segun el caso la variable para que salga del loop.
 while(year<= 2051){
 	//ejecutara lo que este dentro del while mientras la condicion sea verdadera.
 	console.log("estamos en el año: "+year);
 	year++;

 }


 //DO WHILE
 //primero se ejecuta el bloque una vez y luego analiza la condicion.

 var years = 20;

 do{
 	alert("solo cuando sea diferente a 20");
 	years = 20;
 }while(years !=20)

 //para verificar cambiar el valor a years y entrara en el loop infinito.


// ejecutar years hasta que sea menor que 30
 do{
 	alert(years+ " es menor que 30");
 	years++;
 }while(years < 30)


//BREAK
/* nos permite salir de la estructura de control, y cortar su ejecucion. */

/*ejercicio de practica crear una alarma que recorra todos los dias de un mes
de (31dias) hacer que se active la alarma en el dia 25
que muestre cuantos dias faltan para el dia 25
y que el pregunte al usuario si desea que se sigan mostrando los dias siguientes*/

var dia = 1;
var cont = 24;
var continuar = "no";
do{
	console.log("hoy es el dia: "+ dia);

	if((dia != 31) && (cont > 0))
	{
		console.log("faltan "+ cont +" dias para que sea 25");
	}

	if(dia == 25)
	{
		console.log("alarma activada");
		continuar = prompt("si desea continuar viendo los dias ingrese si");
		
		if(continuar == "no")
		{
			console.log("saliendo del calendario");
			break;
		}
		
	}
	


	cont --;
	dia++;
}while(dia !=31)