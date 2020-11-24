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

const filterCountry = document.querySelectorAll('.swiper-slide');

const nav = document.querySelector('.nav__list')

nav.addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;
  
    let filterClass = event.target.dataset['country'];
      console.log(filterClass);
  
      filterCountry.forEach(elem => {
          elem.classList.remove('hide');
         if (!elem.classList.contains(filterClass) && filterClass!== 'All') {
            elem.classList.add('hide');
         }
      });
  });