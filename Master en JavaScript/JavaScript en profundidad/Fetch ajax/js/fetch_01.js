'use strict'
/*es un metodo que nos permite hacer peticioenes
ajax mas simple que con js clasico es una 
llamada a un api rest o un backend que nos 
devuelve un resultado para luego hacer lo 
que queramos (implementarlo en el 
codigo de js)*/

//Para hacer las pruebas entraremos a la rest api JSONPlaceholder

//Evento de carga del script
window.addEventListener('load', function(){
//desde js puedo consultar esos datos y traerlos
//Instalar extencion de chrome jsonview

var formUsuario = document.querySelector("#listadoUsuarios");
var div_janet = document.querySelector("#janet");

	//promesa(le pasamos la url de la pagina donde vamos a sacar los datos)
	//then(metodo para recoger datos), luego usamos la funcion de callback data.json(que lo convierte a json)
	getUsuarios()//funcion que retorna la direccion fetch
	.then(data => data.json())//convertimos la data a json
	.then(users => {
		
		listadoUsuarios(users.data);//Funcion que muestra los usuarios.
	 	//document.querySelector("#loading").style.display = 'none';(usado para ocultar el loading) removido por paja
		return getUsuario();//Pedimos que retorne el fetch de la funcion getUsuario(janet).
	})
	.then(data => data.json())//tomamos lo que retorno la funcion anterior y lo convertimos a json
	.then(user =>{
		mostrarUsuario(user.data);//Funcion mostrarUsuario, muestra a janet
	
		//ahora probamos la funcion getInfo
		return getInfo();
	})
	.then(data => {
		console.log(data);//lo muestro por consola
	})
	//para hacer que falle ingresar en la url del fetch una url falsa(faile to fetch)
	.catch(error => {
		console.log(error);
	});//usado para capturar un error en la promesa


	//Funcion que retorna el fetch de un usuario en particular
	function getUsuario(usuario){
		return fetch("https://reqres.in/api/users/2");
	}

	//Funcion que muestra un usuario y su avatar
	function mostrarUsuario(user){
		console.log(user);
		let nombre = document.createElement('h2');
		let avatar = document.createElement("img");
		nombre.innerHTML = user.first_name + " " + user.last_name;
		avatar.src = user.avatar;
		avatar.width = '100px';
		div_janet.appendChild(nombre);
		div_janet.appendChild(avatar);

	}

	//Promesa creo un obj json, luego lo paso a string en caso q no pueda arrojo reject("error")
	//y si puedo retorno resolve(profesor_string)
	function getInfo(){
		
			var profesor = {
			nombre: 'brenda',
			apellido: 'frias',
			url: 'https://google.com'
		};
		return new Promise((resolve, reject) =>{
			var profesor_string = JSON.stringify(profesor);
		
		if(typeof profesor_string != 'string') return reject('error');
	
			return resolve(profesor_string);
		

		});
		
		
	}


	//Funcion que retorna el fetch de todos los usuarios
	function getUsuarios(usuarios){
		return fetch('https://reqres.in/api/users');
	}

	//Funcion que muestra todos los usuarios (con la funcion map"de arrays").
	function listadoUsuarios(usuarios){
		usuarios.map((user, i) =>{
		let nombre = document.createElement('h2');
		nombre.innerHTML = i + user.first_name + " " + user.last_name;
		formUsuario.appendChild(nombre);
	});
	}

});

//puede que la bloquee,(segun como este configurado el backend) si la bloquea f12,aparecera en el network
//otra pagina reqres
//al tardar 200ms podemos poner un cargando en el html