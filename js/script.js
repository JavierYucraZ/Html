$(document).ready(function(){
	$(window).scroll(function(){
		recorrido = $(window).scrollTop();
		if (recorrido > 1) {
			$('.menu').css({"background":"white"});
			$('.menu a').css({"color":"black"});
			$('.menu').css({"box-shadow":"rgba(0,0,0,0.22) 6px 1px 1px"});
		}else{
			$('.menu').css({"background":"transparent"});
			$('.menu').css({"box-shadow":"0 0 0"});
		}
	});

	$('.menu-icono').click(function(){
		$('header nav').slideToggle();
	});

});