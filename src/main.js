// Lógica para ocultar menú de navegación (sidebar)
const collapseMenuButton = document.querySelector(".collapse-button");
const navigationBar = document.querySelector(".navbar");
const searchBar = document.querySelector(".menu-search");
const textMenuItems = document.querySelectorAll(".menu-link span");

const collapseMenu = (links) => {
  links.forEach((link) => link.classList.toggle("hidden"));
  searchBar.classList.toggle("hidden");
  collapseMenuButton.classList.toggle("rotate-icon");
  navigationBar.classList.toggle("collapsed-bar");
};

collapseMenuButton.addEventListener("click", function () {
  collapseMenu(textMenuItems);
  console.log("Botón collapse pulsado");
});
