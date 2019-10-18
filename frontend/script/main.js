{/**INICIALIZAMOS WOW*/}
//new WOW().init();

{/**PARA QUE EL MENU DE INCIO DE QUEDE FIXED UP */}
$(window).scroll(function(){
    var nav=$('.estilo-menu');
    var inputtext=$('.input-buscar');
    var inputsubmitbuscar=$('.input-submit-buscar');

    var scroll=$(window).scrollTop();
    if(scroll>=93){
        nav.addClass("fondo-menu");
        nav.addClass("fixed-top");
        inputtext.addClass("color-inputbuscar-fixed");
        inputsubmitbuscar.addClass(".input-submit-buscar-fixed");

    }else{
        nav.removeClass("fondo-menu");
        nav.removeClass("fixed-top");
        inputtext.removeClass("color-inputbuscar-fixed");
        inputsubmitbuscar.removeClass(".input-submit-buscar-fixed");
        
    }
})

$('.menu-sidebar-admin').on('click',function(){
    alert("dfsdf");
})

{/**CONFIGURACION DE LA UBICACION MAPA */}

{/**CONFIGURACION DEL CAROUSEL */}



// YOU WILL NEED TO ADD YOUR OWN API KEY IN QUOTES ON LINE 5, EVEN FOR THE PREVIEW TO WORK.
$(document).ready(function () {

    var key = "AIzaSyC3Wn3l_CTFv7zCUVpRs1N9vqrA7AKJEQ8";
    var playlistId = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 5,
        playlistId: playlistId
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
					<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

		
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;


            $('main').append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>

							</article>
						`);
        });
    }

		// CLICK EVENT
    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });


});