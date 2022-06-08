const menu = document.querySelectorAll(".menu");

menu.forEach((element) => {
  element.addEventListener("mouseover", showMenu);
  element.addEventListener("mouseleave", hideMenu);
});

function showMenu(event) {
  const subMenu = event.currentTarget.querySelector(".sub-menu");
  subMenu.style.display = "inline-block";
}

function hideMenu(event) {
  const subMenu = event.currentTarget.querySelector(".sub-menu");
  subMenu.style.display = "none";
}
