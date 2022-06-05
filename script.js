let lastpos = 0;
let header = document.getElementById("header");
window.addEventListener("scroll", function(){
    let scrolltop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolltop > lastpos){
        header.style.top="-120px";
    }
    else{
        header.style.top="0";
    }
    lastpos=scrolltop;
})
ityped.init(document.querySelector(".typetext"), {
    showCursor: true,
    strings: ['web developer.', 'graphic designer.', 'learner.', 'freelancer.']
  })

$(window).scroll(function() {
    $('.exampleimg').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
            $(this).addClass('is-visible');
        }
        else if ((bottom_of_screen < top_of_element) && (top_of_screen > bottom_of_element) && $(this).hasClass('is-visible')) {
            $(this).removeClass('is-visible');
        }
    });
});

$(window).scroll(function() {
    $('.website').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
            $(this).addClass('is-visible');
        }
        else if ((bottom_of_screen < top_of_element) && (top_of_screen > bottom_of_element) && $(this).hasClass('is-visible')) {
            $(this).removeClass('is-visible');
        }
    });
});
document.body.className = 'hidden';
window.addEventListener('load', function(){
    document.body.className = 'visible';
})