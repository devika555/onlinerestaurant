$(document).ready(function(){
	$("#slideshow > div:gt(0)").hide();

	setInterval(function() {
		$('#slideshow > div:first')
		.fadeOut(100)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
	}, 3000);

	$('#loginsubmit').on('click',function(){
		window.location = 'waterpreference.html';
	});

	$('.watering').click(function(){
		window.location='listofkinds.html';
	});

	

});



