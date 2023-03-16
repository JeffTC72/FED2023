
// burger menu
const openButton = document.querySelector("nav img");
const closeButton = document.querySelector("nav section img");
const deNav = document.querySelector("nav");


openButton.addEventListener("click", addMenu);
closeButton.addEventListener("click", removeMenu);

function addMenu(event) {
  deNav.classList.add("showNav");
  openButton.classList.add("showNav");
  closeButton.classList.add("showNav");
}

function removeMenu(event) {
  deNav.classList.remove("showNav");
  openButton.classList.remove("showNav");
  closeButton.classList.remove("showNav");
}