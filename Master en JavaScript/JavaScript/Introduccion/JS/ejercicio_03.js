//let y var
/*MODO ESTRICTO, es para que el compilador no interptete
el codigo arreglando errores, y para programar mejor*/
'use strict'
//palabra que viene de typescript, es usado para definir vairalbes
let prueba = "hola";// especifica en el bloque.


//pruebas con ley y var

//PRUEBA CON VAR
var numero = 40;
console.log(numero);//valor 40

	if(true){
		var numero = 50;
		console.log(numero);//valor 50
	}

console.log(numero); //valor 50

///////////////////////////////////////////

//PRUEBA CON LET
var texto ="prueba uno";
console.log(texto); //valor prueba uno

	if (true) {
		let texto = "prueba dos";//si salgo de este bloque la variable pasara a tomar la goblal
		console.log(texto); //valor prueba dos
	}

console.log(texto); //valor prueba uno	