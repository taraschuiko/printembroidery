const icon = document.getElementsByClassName("nav-menu-icon")[0];
const menu = document.getElementsByClassName("nav-menu")[0];

function openMenu() {
  console.log(menu.classList);

}

icon.addEventListener("click", openMenu);