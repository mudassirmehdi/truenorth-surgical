// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

// show hide the nav search form 

const navSearch = document.getElementById('nav-search');
const searchIcon = document.getElementById('search-icon');

searchIcon.addEventListener('click', function handleClick() {
  if (navSearch.style.display === 'none') {
    navSearch.style.display = 'block'; 
  } else {
    navSearch.style.display = 'none'; 
  }
});


(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    $('.ll-dots-1').mouseover(function(){
      $('.ll-dots-content-1').show();
    });

    $('.ll-dots-2').mouseover(function(){
      $('.ll-dots-content-2').show();
    });

    $('.ll-dots-3').mouseover(function(){
      $('.ll-dots-content-3').show();
    });

    $('.ll-dots-4').mouseover(function(){
      $('.ll-dots-content-4').show();
    });

    $('.ll-dots-5').mouseover(function(){
      $('.ll-dots-content-5').show();
    });

    $('.ll-dots-1').mouseout(function(){
      $('.ll-dots-content-1').hide();
    });

    $('.ll-dots-2').mouseout(function(){
      $('.ll-dots-content-2').hide();
    });

    $('.ll-dots-3').mouseout(function(){
      $('.ll-dots-content-3').hide();
    });

    $('.ll-dots-4').mouseout(function(){
      $('.ll-dots-content-4').hide();
    });

    $('.ll-dots-5').mouseout(function(){
      $('.ll-dots-content-5').hide();
    });
  }); // end DOM ready
})(jQuery); // end jQuery