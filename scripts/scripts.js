$(document).ready(function(){

});

$(window).scroll(function(){
	if (!$(".progress-bar").hasClass("animate") && $(window).scrollTop() + $(window).height()/4 > $(".progress").offset().top) {
		$(".progress-bar").addClass("animate");
	}
});
	var ypos, image;

function parallex() {
    ypos = window.pageYOffset;
        image = document.getElementById('image');
    image.style.top = ypos * .4 + 'px';
}
window.addEventListener('scroll', parallex);



$(document).ready(function() {
    $(".menu").on("click", function() {
        $("nav ul").toggleClass("show");
    });
});
$(document).ready(function() {
    $(".list-item").on("click", function() {
        $("nav ul").toggleClass("show");
    });
});


$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
jQuery(document).ready(function(){

	jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
    width:jQuery(this).attr('data-percent')
},6000)
});

 });





