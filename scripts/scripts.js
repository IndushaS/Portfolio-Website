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
var gulp            = require('gulp'); // Gulp core package
var sass            = require('gulp-sass'); // Package to compile scss files
var path            = require('path'); // Gulp path package

var srcPath         = 'templates/src/'; // Path to our source files
var distPath        = 'templates/dist/'; // Path to your distribution files

// Files/Paths that need to be watched by gulp
var watchPaths    = {
    sass:        [srcPath+'sass/styles.scss']
};

// Task for sass files
gulp.task('sass', function () {
    gulp
        // Load styles.sass into the stream
        .src(srcPath + 'sass/styles.scss') 
        // Compile the styles.scss using the gulp-sass package
        .pipe(sass())
        // Save the compiled file as styles.css to our distribution location
        .pipe(gulp.dest(distPath + 'css'));

});

// The watch task will be executed upon each file change
gulp.task('watch', function() {
    gulp.watch(watchPaths.sass, ['sass']);
});

// Default task is executed upon execution of gulp
gulp.task('default', ['sass', 'watch']);





