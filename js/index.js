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


$('.side_bar .center .item > a').click(function () {

    const $parentThis = $(this).parent('.item');
    const $thisSub = $(this).siblings('.sub_item');

    const itemH = $parentThis.height();
    const subLen = $(this).siblings('.sub_item').children('li').length;

    const subH = itemH * subLen;

    if ($thisSub.hasClass('on')) {
        $thisSub.removeClass('on');
        $thisSub.css('height', 0);
    } else {
        $('.side_bar .center .item .sub_item').css('height', 0);
        $thisSub.addClass('on');
        $thisSub.css('height', subH);
    }

})

// swiper
var swiper = new Swiper(".banner .mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    effect: 'fade',
    // autoplay: {
    //     delay: 3000,
    // },
    pagination: {
        el: ".banner .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".banner .swiper-button-next",
        prevEl: ".banner .swiper-button-prev",
    },

});

var swiper = new Swiper(".best_seller .mySwiper", {
    slidesPerView: 'auto',
    slidesPerGroupSkip: 1,
    keyboard: {
        enabled: true,
    },
    scrollbar: {
        el: ".best_seller .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".best_seller .swiper-button-next",
        prevEl: ".best_seller .swiper-button-prev",
    },
});

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