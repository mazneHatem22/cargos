
$(document).ready(function () {
  $(window).on("load", function () {
    $(".loading-page").fadeOut(2000);
  });
  $(".loading-page").removeClass(".loading-page");


  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("header").addClass("back");
    } else $("header").removeClass("back");
  });
   if ($(this).scrollTop() > 300) {
     $("header").addClass("back");
   } else $("header").removeClass("back");
  /*first slider*/
  $(".owl-carousel.first-slider").owlCarousel({
    loop: false,
    nav: false,
    dots:true,
    margin: 3,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-carousel.first-boss").owlCarousel({
    loop: true,
    nav: false,
    dots:true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".owl-carousel.first-part").owlCarousel({
    loop: true,
    nav: true,
    dots:true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
  // Up
  $(window).on("scroll" ,function () {
    if($(this).scrollTop()> 350){
      $(".up").fadeIn()
    } else $(".up").fadeOut()
  })
  $(".up").on("click",function () {
    $("html").animate({
      scrollTop:0
    },0)
  })
});
