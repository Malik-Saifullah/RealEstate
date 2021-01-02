//Hide Loading Box (Preloader)
function handlePreloader() {
    if ($('.preloader').length) {
        $('.preloader').delay(200).fadeOut(500);
    }
}
$(window).on('load', function () {
    handlePreloader();
});



$(function () {
    $(window).scroll(function () {
        if ($(window).width() >= 768) {
            if ($(this).scrollTop() < 150) {
                $(".sticky-header").hide();
            } else {
                $(".sticky-header").show();
            }
        } else {
            $(".sticky-header").show();
        }
    });
});



$(function () { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
        $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
        $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function () {
        this.classList.toggle('active');
    });
}); // end DOM ready




$(".btn-sale").click(function () {
    $(this).addClass("selected");
    $(".btn-rent").removeClass("selected");
});

$(".btn-rent").click(function () {
    $(this).addClass("selected");
    $(".btn-sale").removeClass("selected");
});





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
    // autoplay: true,
    // autoplayTimeout: 2300,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});



// Product Carousel Slider
if ($('.property-detail .image-carousel').length && $('.property-detail .thumbs-carousel').length) {
    var $sync1 = $(".property-detail .image-carousel"),
        $sync2 = $(".property-detail .thumbs-carousel"),
        flag = false,
        duration = 500;
    $sync1
        .owlCarousel({
            loop: false,
            items: 1,
            margin: 0,
            nav: false,
            navText: ['<span class="icon la la-angle-left"></span>', '<span class="icon la la-angle-right"></span>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000
        })
        .on('changed.owl.carousel', function (e) {
            if (!flag) {
                flag = false;
                $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });
    $sync2
        .owlCarousel({
            loop: false,
            margin: 10,
            items: 1,
            nav: true,
            navText: ['<span class="icon la la-arrow-circle-o-left"></span>', '<span class="icon la la-arrow-circle-o-right"></span>'],
            dots: false,
            center: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 2,
                    autoWidth: false
                },
                400: {
                    items: 2,
                    autoWidth: false
                },
                600: {
                    items: 3,
                    autoWidth: false
                },
                800: {
                    items: 5,
                    autoWidth: false
                },
                1024: {
                    items: 4,
                    autoWidth: false
                }
            },
        })

        .on('click', '.owl-item', function () {
            $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
        })
        .on('changed.owl.carousel', function (e) {
            if (!flag) {
                flag = true;
                $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });
}