$('.best_seller .list li').hover(function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
    } else {
        $(this).addClass('on');
    }
})

$('.withiope li').hover(function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
    } else {
        $(this).addClass('on');
    }
})

// swiper
var swiper = new Swiper(".comment .mySwiper", {

    pagination: {
        el: ".comment .swiper-pagination",
        dynamicBullets: true,
    },
    effect: 'fade',
});

var swiper = new Swiper(".withiope .mySwiper", {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 15,
    touchRatio: 0,
    loop: true,
    pagination: {
        el: ".withiope .swiper-pagination",
    },
    navigation: {
        nextEl: ".withiope .swiper-button-next",
        prevEl: ".withiope .swiper-button-prev",
    },

});
