$(document).ready(function(){

});

$(window).scroll(function(){
	if (!$(".progress-bar").hasClass("animate") && $(window).scrollTop() + $(window).height()/4 > $(".progress").offset().top) {
		$(".progress-bar").addClass("animate");
	}
});