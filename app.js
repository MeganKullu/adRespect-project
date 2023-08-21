//function to control the mobile hamburger menu
function toggleMenu() {
  let navigation = document.querySelector('.mobile'); 
  let hamburgerIcon = document.querySelector('#hamburger-button ion-icon');


  if (navigation.style.display === '' || navigation.style.display === 'none') {
    navigation.style.display = 'block';
    hamburgerIcon.setAttribute('name', 'close');
  } else {
    navigation.style.display = 'none';
    hamburgerIcon.setAttribute('name', 'menu');
  }
}

//function to control the gradient and display all the images upon clicking the button
function scrollImage() {

  const gradientImage = document.querySelector('.gradient');
  const contentContainer = document.querySelector('.container');
  const hiddenImages = document.querySelectorAll('.images');
  const expandButton = document.querySelector('.expandButton')

  gradientImage.style.display = 'none';
  contentContainer.style.overflowY = 'scroll';
  contentContainer.style.width = '100%';

  hiddenImages.forEach(image => {
    image.style.display = 'flex';

  expandButton.style.display ='none';
});


// carousel.js
const carousel = new Flowbite.Carousel("#default-carousel", {
  autoplay: true,           // Enable automatic slide transitions
  interval: 5000,           // Set the interval to a suitable value (in milliseconds)
  resetTimeoutOnManual: true,
});

const prevButton = document.getElementById("data-carousel-previous");
const nextButton = document.getElementById("data-carousel-next");

prevButton.addEventListener("click", () => {
  carousel.prev();
});

nextButton.addEventListener("click", () => {
  carousel.next();
});

}