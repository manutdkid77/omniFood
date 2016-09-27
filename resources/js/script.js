$(document).ready(function(){

	//Mobile Navigation Hamburger
	$('.nav-btn').on('click',function(){
		$('nav').toggleClass('nav-btn-show');
	});

	//Sticky Navigation script
	$('#section-2').waypoint(function(direction){
		if(direction == 'down'){
			$('header').addClass('sticky');
			$('.logo img').attr('src','resources/img/logo.png');
		}
		else{
			$('header').removeClass('sticky');
			$('.logo img').attr('src','resources/img/logo-white.png');	
		}
	});

	//Animations script
	$('#section-2 .features-wrapper').waypoint(function(direction){
		$('#section-2 .features-wrapper').addClass('animated fadeIn');
	},{ offset: '50%'});

	$('#section-5 .features-wrapper').waypoint(function(direction){
		$('#section-5 .features-wrapper').addClass('animated fadeIn');
	},{offset : '50%'});

	$('.app-wrapper').waypoint(function(direction){
		$('.app-photo img').addClass('animated slideInUp');
	},{offset : '50%'});

	$('.price-wrapper').waypoint(function(direction){
		$('.price-box:first-of-type').addClass('animated pulse');
	},{offset : '50%'});
});