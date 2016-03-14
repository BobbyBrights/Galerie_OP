$( document ).ready(function(){})
$(".button-collapse").sideNav();

$(document).ready(function(){
$('.tabs-wrapper .row').pushpin({ top: $('.tabs-wrapper').offset().top });
});

$(document).ready(function(){
$('.materialboxed').materialbox();
});

$(document).ready(function(){
$('.slider').slider();
});


$(document).ready(function(){
    $('.modal-trigger').leanModal();
});

 $('#modal1').openModal();


$(document).ready(function(){
  $('.carousel').carousel();
});

// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', [3]); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', [4]); // Move prev n times.

// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');


$(document).ready(function(){
$('.materialboxed').materialbox();
});

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

$(document).ready(function(){
  $('.parallax').parallax();
});

var options = [
  {selector: '.class', offset: 200, callback: 'globalFunction()' },
  {selector: '.other-class', offset: 200, callback: 'globalFunction()' },
];
Materialize.scrollFire(options);