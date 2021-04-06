import ScrollReveal from 'scrollreveal';
import './scss/index.scss';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

var slideUp = {
  delay: 200,
  duration: 1500,
  distance: '40%',
  origin: 'bottom',
  afterReveal: function(el) {
      ScrollReveal().destroy();
  }
};

ScrollReveal().reveal('.slideup', slideUp);

library.add(faInstagram);
library.add(faSpotify);
dom.watch();

// Get the header
var scroller = document.getElementById("Scroller");
var footer = document.getElementById("Footer");

// Get the offset position of the navbar
var sticky = footer.offsetTop + footer.offsetHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  var rect = footer.getBoundingClientRect();
  if (rect.bottom < window.innerHeight) {
    footer.classList.add("sticky");
  } else {
    footer.classList.remove("sticky");
  }
}

scroller.addEventListener("scroll", myFunction)
