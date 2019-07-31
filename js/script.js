$(document).ready(function(){
	$(window).scroll(function(){
		recorrido = $(window).scrollTop();
		if (recorrido > 1) {
			$('.menu').css({"position" : "fixed"});
			$('.menu').css({"width" : "100%"});
			$('.menu').css({"transition" : ".3s"});
			$('.menu').css({"top":"0"});
			$('.menu').css({"background":"white"});
			$('.menu').css({"z-index":"4"});
			$('.menu a').css({"color":"black"});
			$('.menu').css({"box-shadow":"rgba(0,0,0,0.22) 6px 1px 1px"});
			$('.contenedorTitulo').css({"margin-top":"150px"});
		}else{
			$('.contenedorTitulo').css({"margin-top":"0"});
			$('.menu').css({"transition":".3s"});
			$('.menu').css({"position":"relative"});
			$('.menu').css({"background":"transparent"});
			$('.menu').css({"box-shadow":"0 0 0"});
		}
	});
});