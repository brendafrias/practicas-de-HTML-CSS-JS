'use strict'

window.addEventListener('load', function(){
	
	

	try{
		var year = 2020;
		alert(year);//error en el nombre de la variable

		var vector = new Array(9999999999999999999999999999999999999999999);//RangeError: Invalid array length
	}catch(error){
		alert("ocurrio el error: " + error);
	}
	

});