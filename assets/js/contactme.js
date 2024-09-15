/*for the hamburger menu toggles it on or off u know*/ 
$(function() {
    $('.navbar-toggler').on('click', function() {
      $('.navbar-collapse').toggleClass('show');
    });
  });
//end of hamburger menu