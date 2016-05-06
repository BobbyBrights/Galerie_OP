        $(document).ready(function(){
          $('.button-collapse').sideNav({
            menuWidth: 900, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
            }
          );

          $('.scrollspy').scrollSpy();
          $('.slider').slider({
            indicators: false,
            interval: 1000
          });
          $('.materialboxed').materialbox();
        });