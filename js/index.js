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
    },
    effect: 'fade',
});

var swiper = new Swiper(".withiope .mySwiper", {
    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 3,
    spaceBetween: 15,
    breakpoints: { //반응형 조건 속성
        640: { //640 이상일 경우
            slidesPerGroup: 1, //레이아웃 2열
        },
        768: {
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerGroup: 3,
        },
    },
    navigation: {
        nextEl: ".withiope .swiper-button-next",
        prevEl: ".withiope .swiper-button-prev",
    },
});