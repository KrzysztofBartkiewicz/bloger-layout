const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', (e) => {
   navigation.classList.toggle('visible');
});