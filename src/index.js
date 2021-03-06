import ScrollReveal from 'scrollreveal';
import './scss/index.scss';

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
