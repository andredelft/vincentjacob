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
