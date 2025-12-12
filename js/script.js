// ===============================================
//
// ===============================================
const menuThumbCard = document.querySelectorAll('.menu-thumb-card');
let menuThumbCard_len = menuThumbCard.length;

// ===============================================
//
// ===============================================
const mainVisualSwiper = new Swiper('.main-visual-swiper', {
  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },

  loop: true,

  loopAdditionalSlides: 1,

  speed: 2000,

  autoplay: {
    delay: 4000,
    // delay: 7000,
    disableOnInteraction: false,
    waitForTransition: false,
  },

  followFinger: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// ===============================================
//
// ===============================================
const menuSwiper = new Swiper('.menu-swiper', {
  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },

  speed: 500,

  navigation: {
    nextEl: '.menu .swiper-button-next',
    prevEl: '.menu .swiper-button-prev',
  },

  on: {
    afterInit: (swiper) => {
      menuThumbCard[swiper.realIndex].classList.add('menu-thumb-card-active');

      for (let i = 0; i < menuThumbCard.length; i++) {
        menuThumbCard[i].onclick = () => {
          swiper.slideTo(i);
        };
      }
    },

    slideChange: (swiper) => {
      SwitchMenuThumb(swiper.realIndex);
    },
  }
});

// ===============================================
//
// ===============================================
const SwitchMenuThumb = (index) => {
  let el = document.querySelector('.menu-thumb-card-active');

  if(el != null) {
    el.classList.remove('menu-thumb-card-active');
  }

  menuThumbCard[index].classList.add('menu-thumb-card-active');
}



