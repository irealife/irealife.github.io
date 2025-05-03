"use strict";

;
(function () {
  new Swiper('.advantages__slider', {
    navigation: {
      nextEl: '.advantages__button-next',
      prevEl: '.advantages__button-prev'
    },
    pagination: {
      el: '.advantages__pagination',
      clickable: true
      // dynamicBullets: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    mousewheel: {
      sensitivity: 1
    },
    watchOverflow: true,
    spaceBetween: 24,
    slidesPerView: 1,
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1140: {
        slidesPerView: 4
      }
    }
  });
})();