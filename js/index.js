$('.best_seller .list li').hover(function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
    } else {
        $(this).addClass('on');
    }
})
// $('.withiope li').mouseenter(function () {
//     $(this).addClass('on');
// })

// $('.withiope li').mouseleave(function () {
//     $(this).removeClass('on');
// })

$('.side_bar .center .item .title').click(function () {

    const $parentThis = $(this).parent('.item');
    const $thisSub = $(this).siblings('.sub_item');

    const itemH = $parentThis.height();
    console.log(itemH)
    const subLen = $(this).siblings('.sub_item').children('li').length;

    const subH = itemH * subLen;

    let plusIco = $(this).children('em');
    $('.side_bar .center .item .title em ').removeClass('on');

    if ($thisSub.hasClass('on')) {
        $thisSub.removeClass('on');
        $thisSub.css('height', 0);
    } else {
        $('.side_bar .center .item .sub_item').css('height', 0);
        $('.side_bar .center .item .sub_item').removeClass('on');
        $thisSub.addClass('on');
        $thisSub.css('height', subH);
        PlusAdd()
    }

    function PlusAdd() {
        if (itemH > 0) {
            $(plusIco).addClass('on');
        }
    }

    function PlusRemove() {
        if (0 > itemH) {
            $(plusIco).removeClass('on');
        }
    }
})

// swiper
var swiper = new Swiper(".banner .mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
        delay: 3000,
    },
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
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 15,
    breakpoints: {
        640: {
            slidesPerGroup: 1,
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

function sideOepn() {
    $('.side_bar').addClass('on');
    $('body').css('overflow', 'hidden');
}

function sideClose() {
    $('.side_bar').removeClass('on');
    $('body').css('overflow', 'visible');
}