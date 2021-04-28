const navBlock = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toggle');

/* nav show/close */

navBlock.classList.remove('header-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navBlock.classList.contains('header-nav--closed')) {
    navBlock.classList.remove('header-nav--closed');
    navBlock.classList.add('header-nav--opened');
  } else {
    navBlock.classList.add('header-nav--closed');
    navBlock.classList.remove('header-nav--opened');
  }
})
