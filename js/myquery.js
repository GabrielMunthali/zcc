$('.owl-hero').owlCarousel({
    loop:true,
    margin:0,
    lazyLoad: true,
    animateOut: 'fadeOut',
    nav:true,
    navText: ["<span class='la la-angle-left'></span>", "<span class='la la-angle-right'></span>"],
    dots: false,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-admins').owlCarousel({
    loop:true,
    margin:0,
    lazyLoad: true,
    animateOut: 'fadeOut',
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})