$(document).ready(function(){
	$('.nav-btn').on('click',function(){
		$('nav').toggleClass('nav-btn-show');
	});

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
});