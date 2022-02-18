$(function () {

    // ==== banner-slider ====

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false
                }
            },

        ]
    })


    // ==== tabs ====

    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active')

        $('.product-slider').slick('setPosition')
    })

    // ==== favorite ====

    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active')
    })


    // ==== product-slider ====

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="./images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="./images/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },

        ]
    })

    // ==== connencting form-styler ====

    $('.filter-style').styler();

    // ==== drop item ====

    $('.filter__item-drop, .filter-extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('600')
    })

    // ==== range-slider ====

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });

    // ==== filter-btns ====

    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list')
    })
    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list')
    })


    // ==== rateYo ====

    $(".rate-yo").rateYo({
        ratedFill: "#1c62cd",
        normalFill: "#c4c4c4",
        spacing: "7px",
    });

    // ==== menu mobile ====

    $('.menu__btn').on('click', function () {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
    })

    // ==== footer drop-down ====

    $(window).resize(function () {
        if ($(window).width() > 600) {
            $('.footer-list:hidden').show()
            $('.footer__top-title').removeClass('active')
        }
        if ($(window).width() > 640) {
            $('.aside-filter:hidden').show()
        }
        if ($(window).width() < 600) {
            $('.footer-list').hide()
            $('.footer-list-title').removeClass('active')

        }
    })

    $('.footer__top-title').on('click', function () {
        if ($(window).width() < 601) {
            $(this).next().slideToggle('400');
            $(this).toggleClass('active');
        }
    })





    $('.aside__btn').on('click', function () {
        console.log('!')
        $(this).next().slideToggle('400');
    })
});
