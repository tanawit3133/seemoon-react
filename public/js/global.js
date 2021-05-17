$(function() {

	 new WOW().init();

	 var setSpace = $('header').innerHeight();
	 

	 $('.burger-icon').click(function(){
	 	var setSpace = $('header').innerHeight();	
	 	$('.burger-menu').fadeToggle(300);
	 	$(this).toggleClass('open');
	 	$('body').toggleClass('locked');
	 });

});

$(window).on('load',function(){
	var setSpace = $('header').innerHeight();
	$('.header-space').height(setSpace);
})

$(window).resize(function(){
	var setSpace = $('header').innerHeight();
	var WW = $(window).width();
	if(WW>767){
		$('.burger-icon').removeClass('open');
		$('.burger-menu').slideUp(300);
		$('body').removeClass('locked');
	}else{

	}
});