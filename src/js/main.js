import $ from '../local_modules/jquery/dist/jquery.min'

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log(`document ready`)

    new Swiper('.slider',{
        slideToClickedSlide: false,
        simulateTouch: false,
        slidesPerView: 6,
        spaceBetween: 30,
        setWrapperSize: true,
        slidesPerColumn: 2,
        autoHeight: false,
        loop: false,
        width: 1330,

        navigation:{
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
        },
    });
})
