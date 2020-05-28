const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown__list');

hamburger.addEventListener('click', (e) => {
   navigation.classList.toggle('visible');
});

dropdownButton.addEventListener('click', (e) => {
   dropdownMenu.classList.toggle('visible');
});
