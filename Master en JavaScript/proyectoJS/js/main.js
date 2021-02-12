$(document).ready(function(){

	//Slider
	if(window.location.href.indexOf("index") > -1){
	$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    responsive: true,
	  });

	}


	//Post
	if(window.location.href.indexOf("index") > -1){
	var posts = [
		{
			title: 'prueba de titulo 1',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + "del " + moment().format("YYYY"),
			content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
		},

		{
			title: 'prueba de titulo 2',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + "del " + moment().format("YYYY"),
			content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
		},

		{
			title: 'prueba de titulo 3',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + "del " + moment().format("YYYY"),
			content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
		},

		{
			title: 'prueba de titulo 4',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + "del " + moment().format("YYYY"),
			content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
		},

		{
			title: 'prueba de titulo 5',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + "del " + moment().format("YYYY"),
			content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
		},

		{
			title: 'prueba de titulo 6',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + "del " + moment().format("YYYY"),
			content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
		},
	];

	posts.forEach((item, index) => {
		var post =`
						<article class="post">
						<h2>${item.title}</h2>
						<span class="date">(${item.date}</span>
						<p> ${item.content}</p>
					<a href="" class="button-more">Leer mas</a>
					</article>

				`;
		
		$("#posts").append(post);	
		});

	}

	//Selector de tema
	var theme = $("#theme");

	//Cambia a verde
	$("#to-green").click(function(){
		theme.attr("href", "css/green.css")
	});
	//Cambia a rojo
	$("#to-red").click(function(){
		theme.attr("href", "css/red.css")
	});
	//Cambia a azul
	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css")
	});

	//Scroll arriba
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;

	});

	//Login
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();
		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
		about_parrafo.html("<br><strong>Bienvenido,"+form_name+"</strong>");
		about_parrafo.append("<a href= '#' id='logout'>Cerrar sesion</a>");
		//Ocultar login
		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}
	
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}
});