// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();
  $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  $('.button-collapse').sideNav('show');

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
        


  var options = [
    {selector: '.class', offset: 200, callback: customCallbackFunc } },
    {selector: '.other-class', offset: 200, callback: function() {
      customCallbackFunc();
    } },
  ];
  Materialize.scrollFire(options);



  $(document).ready(function(){
    $('.collapsible').collapsible({
      expandable : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

    $(document).ready(function(){
      $('.carousel').carousel();
    });
        
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
        
// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', [3]); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', [4]); // Move prev n times.
      