// ===============================================
//
// ===============================================
const menu_thumb_card = document.querySelectorAll('.menu_thumb_card');
let menu_thumb_card_len = menu_thumb_card.length;

// ===============================================
//
// ===============================================
const main_visual_swiper = new Swiper('.main_visual_swiper', {
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
const menu_swiper = new Swiper('.menu_swiper', {
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
      menu_thumb_card[swiper.realIndex].classList.add('menu_thumb_card_active');

      for (let i = 0; i < menu_thumb_card.length; i++) {
        menu_thumb_card[i].onclick = () => {
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
  let el = document.querySelector('.menu_thumb_card_active');

  if(el != null) {
    el.classList.remove('menu_thumb_card_active');
  }

  menu_thumb_card[index].classList.add('menu_thumb_card_active');
}



