$(document).ready(function () {
    $(".single-item").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


var windowWidth = $(window).width();

function menuFn() {
    if (windowWidth >= 768) {
        $('#menuu').removeClass('menu-short');
        $('#menuu').addClass('menu-full');
        $('#menuu li').removeClass('menu-short-item');
        $('#menuu li').addClass('menu-full-item');
    } else {
        $('#menuu').addClass('menu-short');
        $('#menuu').removeClass('menu-full');
        $('#menuu li').addClass('menu-short-item');
        $('#menuu li').removeClass('menu-full-item');
    };
}
menuFn();

$(window).resize(function() {
    windowWidth = $(window).width();
    menuFn();
})