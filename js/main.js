const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown__list");

let buttonClicked = false;

hamburger.addEventListener("click", (e) => {
  navigation.classList.toggle("visible");
});

dropdownButton.addEventListener("click", (e) => {
  dropdownMenu.classList.toggle("dropdown-visible");
  buttonClicked = true;
});

//console.log(dropdownMenu.getBoundingClientRect());

document.addEventListener('click', (e) => {
   if (dropdownMenu.classList.contains('dropdown-visible') && !buttonClicked) {
      const coords = dropdownMenu.getBoundingClientRect();
      if (!(e.clientX > coords.left &&
            e.clientX < coords.right &&
            e.clientY > coords.top &&
            e.clientY < coords.bottom)) {
         dropdownMenu.classList.remove('dropdown-visible');
      }
   }
   buttonClicked = false;
});