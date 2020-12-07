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
    $("#rent-form-container").hide();
    $("#sale-form-container").css("display", "flex");
});

$(".btn-rent").click(function () {
    $(this).addClass("selected");
    $(".btn-sale").removeClass("selected");
    $("#sale-form-container").hide();
    $("#rent-form-container").css("display", "flex");
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