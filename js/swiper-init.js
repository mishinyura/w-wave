const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  // centeredSlides: true,
  parallax: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    800: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    1050: {
      slidesPerView: 4,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
