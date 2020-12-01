import $ from '../local_modules/jquery/dist/jquery.min'
//Import stylesheets
//import './../../build/css/style.min.css'

$(document).ready(() => {
  // eslint-disable-next-line no-console
  console.log(`document ready`)

  let swiper;
  

    const initSlider = () => {
      swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    };

  const initialSlides = document.querySelectorAll('.slider__slide');
 // console.log(initialSlides);
  
  
  const selectFilter = filterVal => {
    //console.log(filterVal); 
    const isAllFilter = filterVal === 'all';
    document.querySelectorAll('.nav__item').forEach(item => {
      item.classList.toggle('active', item.dataset.filter === filterVal);
    });

      swiper.removeAllSlides();
      swiper.prependSlide(Array.prototype.slice.call(initialSlides).filter(slide => isAllFilter || slide.dataset.country === filterVal));
      swiper.destroy();
      initSlider();
    }

  initSlider();
  
  document.querySelectorAll('.nav__item').forEach(item => {
  item.onclick = e => {
  selectFilter(e.target.dataset.filter);
  }
  });



}); 











/*
  const Slider = new Swiper('.slider', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerColumn: 2,

   
  });




  

  /*function filterSelected(){

    Slider.destroy();

    
};*/
  
  
    /*const nav = $('.nav__list');
    const filterCountry = $('.slider__slide');


   nav.on('click', function(event){

  let filterClass = event.target.dataset['country'];
  
  filterCountry.remove();

  filterCountry.each(function($elem){
    if($($elem).hasClass(filterClass) && filterClass !== 'all') { 
    
        $(".slider__wrapper").append($($elem)[0].outerHTML);
       }

    });

   });

});*/
  /*
   nav.addEventListener('click', event => {

    let filterClass = event.target.dataset['country'];
    console.log(filterClass);

    filterCountry.forEach(elem => {
       
     /* setTimeout(function () {
        elem.classList.remove('visuallyhidden');
      }, 30);
      
      elem.classList.remove('hidden');
    
      if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      
        elem.classList.add('hidden');

       /* elem.style.marginRight = "30px";
       
     
      } 
     
    });
    
  

  });*/







        
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
    });*/


