
$(document).ready(function () {
    $(window).bind('scroll', function () {
        var gap = 50;
        if ($(window).scrollTop() > gap) {
            $('.navbar').addClass("active");
        } else {
            $('.navbar').removeClass("active")
        }
        if (this.scrollY > 400) {
            $('.scroll-up-btn ').addClass("show");
        } else {
            $('.scroll-up-btn ').removeClass("show");
        }
    });

    // slide-up script 
    $('.scroll-up-btn ').click(function () {
        $('html,body').animate({ scrollTop: 0 });
    });



    // toggle menu/navbar script 
    $(' .menu-btn ').click(function () {
        $(' .navbar .menu').toggleClass("showing");
        $(' .menu-btn i').toggleClass("showing");
    })
});


//  typing animation script 
var typed = new Typed(".typing-text-1", {
    strings: ["Web Developer.", "Open-Source.", "Web Designer.", "Front-End Developer.",],
    loop: true,
    typeSpeed: 50,
    backSpeed: 35,
    backDelay: 500,
});

var typed = new Typed(".typing-text-2", {
    strings: ["Web Developer.", "Web Designer.", "Front-End Developer.",],
    loop: true,
    typeSpeed: 50,
    backSpeed: 35,
    backDelay: 500,
});

//   --SceollReveal- start 

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 800,
    delay: 100

});

// Home section
ScrollReveal().reveal('.button',  { delay: 500, origin: 'top' });
ScrollReveal().reveal('.social-icons',  { delay: 600, origin: 'left' });
ScrollReveal().reveal('.image-area', { delay: 650, origin: 'top' });


// About Section--
ScrollReveal().reveal('.title', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.column-left', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.column-right', { delay: 700, origin: 'top' });

// Skill Section 

ScrollReveal().reveal('.skill-box', { delay: 500, origin: 'top' });

// Education Section
ScrollReveal().reveal('.education-box', { delay: 700, origin: 'left' });

// projects section
ScrollReveal().reveal('.box', { delay: 400, origin: 'top' });

// contact section
ScrollReveal().reveal('.content', { delay: 500, origin: 'left' });

//--SceollReveal- end