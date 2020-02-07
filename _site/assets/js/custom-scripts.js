// Fullscreen menu
$('#toggleNav').click(function() {
 event.preventDefault();
 $(this).toggleClass('active');
 $('#navbarMobile').toggleClass('open');
});

// Esc overlay
var KEYCODE_ESC = 27;

$(document).keyup(function(e) {
  if (e.keyCode == KEYCODE_ESC) {
    $( "#navbarMobile" ).removeClass('open');
    $( "#toggleNav" ).removeClass('active');
  }
});

// Case Studies
$(document).ready(function(){
  $('.gallery-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
   asNavFor: '.gallery-nav',
   autoplay: true
  });
  $('.gallery-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.gallery-for',
   arrows: false,
   dots: false,
   centerMode: true,
   focusOnSelect: true
  });
});
