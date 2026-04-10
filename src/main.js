// Lógica para ocultar menú de navegación (sidebar)
const collapseMenuButton = document.querySelector(".collapse-button");
const searchBar = document.querySelector(".menu-search");
const textMenuItems = document.querySelectorAll(".menu-link span");

const collapseMenu = (links) => {
  links.forEach((link) => link.classList.toggle("hidden"));
  searchBar.classList.toggle("hidden");
};

collapseMenuButton.addEventListener("click", function () {
  collapseMenu(textMenuItems);
  console.log("Botón collapse pulsado");
});
