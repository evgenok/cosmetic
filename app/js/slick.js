// ----------------------слайдер slick------------

$('.slick').slick({
   infinite: true,
   dots: true,
   slidesToShow: 7,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
   variableWidth: true,
   responsive: [
      {
         breakpoint: 1450,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1
         }
      }]
})