'use strict'
//es una libreria para js que nos permite hacer animaciones, peticiones ajax.
//Para utilizar JQuery vamos a la pagina jquery.com/download
//seleccionamos la version que queremos descargar
//click derecho guardar como y la guardamos en la carpeta JS de nuestro proyecto
//luego la llamamos usando un script en el html

//Lo primero que tenemos que ver al utilizar jquery es comprobar que este
//Para eso llamamos al selector $(document) y al evento ready con su funcion de callback
$(document).ready(function(){
	console.log("JQuery cargado");

//AHORA VEREMOS SELECTORES CON JQUERY

//Selector de ID, seleccionaremos los parrafos del html por su id
var rojo = $("#rojo").css("background","red"); //#se refiere al nombre del id
console.log(rojo);//mostramos lo que contiene el parrafo que guardamos

//Ahora vamos a cambiarle el color a un parrafo usando jquery.
var amarillo = $("#amarillo").css("background","yellow");//accedemos a la propiedad css para cambiarle el fondo.

//Si quiero modificar mas de una cosa no es necesario volver a llamar al selector. EJ:
var verde = $("#verde").css("background","green")
					   .css("color","yellow");

//No es necesario guardar en una variable

//SELECTORES DE CLASES.
var mi_clase = $('.zebra'); //para acceder a las clases se accede mediante "."
console.log(mi_clase);//ARRAYS me muestra todos los elementos de la clase
//si quiero mostrar 1 solo puedo poner:
console.log(mi_clase[1]);
//o el metodo .eq
console.log(mi_clase.eq(2));//es recomendable usar eq

//Ahora le modificamos el padding a todos los elementos de la clase zebra
mi_clase.css("padding","5px");

//Ahora pondremos el evento click sobre la clase sin_borde,
//para que cuando hagamos click se comporte como la clase zebra
$('.sin_borde').click(function(){
	console.log("Click!!!");
	$(this).addClass('zebra');
//SI VEMOS EN LA CONSOLA AHORA LOS PARRAFOS DE LA CALSE sin_borde PASARAN A TENER LA CLASE zebra TAMBIEN
});


//SELECTORES DE ETIQUETA (seleccionamos a todos los parrafos).
var parrafos = $('p').css("cursor","pointer");
//Al darle click le quitaremos la clase zebra al parrafo.
parrafos.click(function(){
	var obj = $(this);
	if(!obj.hasClass('grande')){
		obj.addClass('grande');
	}else{
		obj.removeClass('grande');
	}
	
});


//SELECTORES POR ATRIBUTO
//aqui usaremos el atributo title
$('[title="Google"]').css('background','green');
$('[title="Facebook"]').css('background', '#adc');


//OTROS
//seleccionar varios
//$('p,a').addClass('margen-superior');

//FIND (Busca todos los elementos que tengan esa clase)
var busqueda = $('#caja').find('.resaltado');
//$('#caja').resaltado; tambien serviria
console.log(busqueda);

//Metodo parent, si no encontramos elementos que coincidan con nuestra busqueda usamos el metodo parent para que busque en una capa anterior
var busqueda2 = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="Google"]');
//con parent() saltamos otro nivel de etiqueta
console.log(busqueda2);
});//podemos escribir $ o jQuery (el signo dolar se hace referencia a jquery)


