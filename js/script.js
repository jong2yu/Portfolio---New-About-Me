$(document).ready(function(){

  // Counter Up
  $('#skills h6').counterUp({
    delay: 10,
    time: 1000
  });

  // Slider
  $('#project .slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: true,
    prevArrow : "<span class='material-symbols-outlined slick-prev'>chevron_left</span>",
    nextArrow : "<span class='material-symbols-outlined slick-next'>chevron_right</span>"
  });

});