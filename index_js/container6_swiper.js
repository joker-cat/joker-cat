var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: '5%',
  slidesPerGroup: 1,
  loop: true,
  breakpointsInverse: false,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  breakpoints: {
    920: {
      slidesPerView: 2,
    },
    420: {
      slidesPerView: 1,
    },
  }
});