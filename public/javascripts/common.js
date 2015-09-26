$(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 120) {
			$('nav').removeClass('navbar-static-top').addClass('navbar-fixed-top');
			$('#content').css('marginTop', '51px');
		} else {
			$('nav').removeClass('navbar-fixed-top').addClass('navbar-static-top');
			$('#content').css('marginTop', '0');
		}
	})
});