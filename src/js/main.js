import $ from '../local_modules/jquery/dist/jquery.min'
//Import stylesheets
//import './../../build/css/style.min.css'

$(document).ready(() => {
  // eslint-disable-next-line no-console
  console.log(`document ready`)

  const Slider = new Swiper('.slider', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerColumn: 2,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });




  const nav = document.querySelector('.nav__list')
  const filterCountry = document.querySelectorAll('.swiper-slide');

  nav.addEventListener('click', event => {

    /*if (event.target.tagName !== 'LI') return false;*/

    let filterClass = event.target.dataset['country'];
    console.log(filterClass);

    filterCountry.forEach(elem => {
        elem.style.marginRight = "30px";
        setTimeout(function () {
            elem.classList.remove('visuallyhidden');
          }, 200);
    
      elem.classList.remove('hidden');

     
      
      if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
        setTimeout(function () {
            elem.classList.add('visuallyhidden');
          }, 200);
        elem.classList.add('hidden');
        
        
       

        Slider.destroy();
      /*
        document.querySelector("all").addEventListener('click', event =>{
            
          



        }*/
    
       /* swiperWrapper.empty().append(newSlides);
        $('.swiper-wrapper').attr('style', '');*/
     /*  const Slider = new Swiper('.slider', {
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        });*/

        /* if (elem.hasClass('hidden')) {
           elem.removeClass('hidden');
           setTimeout(function () {
             elem.removeClass('visuallyhidden');
           }, 20);
         } else {
           elem.addClass('visuallyhidden');
           elem.one('transitionend', function(e) {
             elem.addClass('hidden');
           });
         }*/

        /*const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', event => {
  if (event.target.tagName !== 'LI') return false;

  let filterClass = event.target.dataset['f'];
    console.log(filterClass);

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
       if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
          elem.classList.add('hide');
       }
    });
});*/
      }

    });

  });

});
