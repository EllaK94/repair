$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 3, 
    slidesToScroll: 1, 
    infinite: true, 
    prevArrow: $('.arrows__left'), 
    nextArrow: $('.arrows__right'), 
    responsive: [
        {
          breakpoint: 1200, // На экранах меньше чем 1200px
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768, // На экранах меньше чем 768px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
  });
});