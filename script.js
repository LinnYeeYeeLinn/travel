$(document).ready(function(){
    $(".fa-bars").click(function(){
      $("nav .listItem").slideToggle(1000);
      $("nav .listItem ul li").click(function(){
        $("nav .listItem").slideUp(500);
      })
    });
    $("nav .listItem ul li a").click(function(){
      $("nav .listItem ul li a").removeClass('active');
      $(this).addClass('active');
    })
});

var swiper = new Swiper(".reviewBox", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });