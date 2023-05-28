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
