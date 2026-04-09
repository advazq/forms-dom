// Lógica para ocultar menú de navegación (sidebar)
const collapseMenuButton = document.querySelector(".collapse-button");
const searchBar = document.querySelector(".menu-search");
const textMenuItems = document.querySelectorAll(".menu-link span");

const collapseMenu = (links) => {
  links.forEach((link) => (link.textContent = ""));
  searchBar.textContent = "";
};

collapseMenuButton.addEventListener("click", function () {
  collapseMenu(textMenuItems);
  console.log("Botón collapse pulsado");
});
