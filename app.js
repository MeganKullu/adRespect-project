function toggleMenu() {
  let navigation = document.querySelector('.mobile'); // Use querySelector to select the first matching element
  let hamburgerIcon = document.querySelector('#hamburger-button ion-icon');

  if (navigation.style.display === '' || navigation.style.display === 'none') {
      navigation.style.display = 'block';
      hamburgerIcon.setAttribute('name', 'close');
  } else {
      navigation.style.display = 'none';
      hamburgerIcon.setAttribute('name', 'menu');
  }
}

function scrollImage() {
  
}