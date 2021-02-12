'use strict'
window.addEventListener('load',function(){
	var bicicleta = {
		color:"rojo",
		modelo:"bmx",
		frenos:"disco",
		velocidadMax:"60km"
		cambiaColor: function(nuevo_color){
			this.color = nuevo_color;
			console.log(this);
		}
	};
	bicicleta.cambiaColor("azul");
	console.log(bicicleta);
});