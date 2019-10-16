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

$('.carousel').carousel({
    interval: 800
  })
    