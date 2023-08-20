import {Splide} from '/assets/splide-4.1.3/dist/js/splide.min.js'; 

document.addEventListener('DOMContentLoaded', function() {
  new Splide('.splide', {
    type: 'loop', // Enable continuous looping
    autoplay: true,
    interval: 5000, // Set your desired autoplay interval in milliseconds
  }).mount();
});

  