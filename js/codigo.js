

$(".carousel").owlCarousel ({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive: {
        300:{
            items: 1,
            nav: false
        },
        335:{
            items: 1,
            nav: false
        },
        600:{
            items: 1,
            nav: false
        },
        1140:{
            items: 3,
            nav: false
        },
        1340:{
            items: 3,
            nav: false
        },
        
    }        
});

$(".carousel_vid").owlCarousel ({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive: {
        300:{
            items: 1,
            nav: false
        },
        600:{
            items: 1,
            nav: false
        },
        1140:{
            items: 1,
            nav: false
        },
        1340:{
            items: 1,
            nav: false
        },
        
    }        
});


$(".carousel_grid_").owlCarousel ({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 3,
            nav: false
        },
        1140:{
            items: 4,
            nav: false
        },
        1340:{
            items: 5,
            nav: false
        },
        
    }        
});

$(".carousel_cards").owlCarousel ({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive: {
        300:{
            items: 1,
            nav: false
        },
        600:{
            items: 3,
            nav: false
        },
        1140:{
            items: 4,
            nav: false
        },
        1340:{
            items: 5,
            nav: false
        },
        
    }        
});


window.addEventListener("scroll", function(){
        var sub_menu = document.querySelector(".sub_menu");
        sub_menu.classList.toggle("sticky", window.scrollY > 127);
        
    })

