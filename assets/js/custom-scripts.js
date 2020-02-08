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
   asNavFor: '.gallery-nav',
   arrows: true,
   fade: true,
   autoplay: false
  });
  $('.gallery-nav').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   asNavFor: '.gallery-for',
   arrows: false,
   dots: false,
   centerMode: false,
   focusOnSelect: true
  });
});
