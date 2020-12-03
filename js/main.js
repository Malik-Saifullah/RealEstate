$('.banner__content__box').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2300
});


$('.agents__slider').owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2300,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});