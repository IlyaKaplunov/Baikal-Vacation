import Swiper, { Navigation, Pagination, Thumbs, Autoplay} from "swiper"; 
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]); 

const portfolioSlider = new Swiper(".gallery__slider", { 
    spaceBetween: 32, 
    speed: 600,
    slidesPerView: 1, 
    loop: true,
    navigation: { 
      nextEl: ".gallery__arrow--next", 
      prevEl: ".gallery__arrow--prev", 
    },
    breakpoints: {
      1024: {
        slidesPerView: 3, 
      },
      925: {
        slidesPerView: 2, 
      },
      650: {
        slidesPerView: 1,
      }
    }
  });