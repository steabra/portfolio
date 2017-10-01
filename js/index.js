$(function(){
	$('.thumbnail').hover(function() {
		var imgWidth = $(this).width();
		var imgHeight = $(this).height();
	
		$(".thumbnail #description").width(imgWidth);
		$(".thumbnail #description").height(imgHeight);
		$(this).find('#description').slideDown(500);
	}, function (){
		$(this).find('#description').slideUp(500);
	});	
});