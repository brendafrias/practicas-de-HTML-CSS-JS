alert("prueba, guardado");

//Tipos de datos en typescript
let cadena: string = "soy una cadena";

let numero: number = 12;

let booleano: boolean = true;

let cualquiera: any = "cualquier cosa";

var lenguajew: Array<string> = ["php" , "js", "c"];
let years: number[] = [10,14,99];

console.log(cadena);
console.log(numero);

//Varios tipos de datos
let cadenaNumero: string|number = "cadena";
cadenaNumero = 12;//ahora es un numero.

//Crear tipo de datos
type alfanumerico = string|number;
let cadenaDos: alfanumerico = "letras y numeros";

//Funciones
function getNumber(numero = 0){
	return "El numero es:" + numero;
}

console.log(getNumber(5));//JavaScript

function getNumber2(numero: number = 0):string{
	return "El numero es:" +numero;
}

console.log(getNumber2(3));






