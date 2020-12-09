$(document).ready(function(){

	//Slider
	$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    responsive: true,
  });


	//Post
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
});