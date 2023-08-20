const myElement = document.getElementById("myElement");

// Define the animation
anime({
  targets: myElement,
  opacity: 0.5,
  scale: 1.2,
  duration: 1000, // Animation duration in milliseconds
  easing: "easeInOutQuad" // Animation easing function
});

