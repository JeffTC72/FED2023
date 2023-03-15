
// burger menu
const deButton = document.querySelector("nav img");
const deNav = document.querySelector("nav");


deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("showNav");
  deButton.classList.toggle("showNav");
}
  