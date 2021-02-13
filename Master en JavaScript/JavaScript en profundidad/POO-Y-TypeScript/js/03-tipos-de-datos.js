alert("prueba, guardado");
//Tipos de datos en typescript
var cadena = "soy una cadena";
var numero = 12;
var booleano = true;
var cualquiera = "cualquier cosa";
var lenguajew = ["php", "js", "c"];
var years = [10, 14, 99];
console.log(cadena);
console.log(numero);
//Varios tipos de datos
var cadenaNumero = "cadena";
cadenaNumero = 12; //ahora es un numero.
var cadenaDos = "letras y numeros";
//Funciones
function getNumber(numero) {
    if (numero === void 0) { numero = 0; }
    return "El numero es:" + numero;
}
console.log(getNumber(5)); //JavaScript
function getNumber2(numero) {
    if (numero === void 0) { numero = 0; }
    return "El numero es:" + numero;
}
console.log(getNumber2(3));
