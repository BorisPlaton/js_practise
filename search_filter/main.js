"use strict";

const searchInput = document.getElementById("search-input");
const liElements = document.getElementsByTagName("li");

searchInput.addEventListener("keyup", () => {
  let searchQuery = searchInput.value.toLowerCase();
  let liValues = getLiValues();
  for (let i = 0; i < liElements.length; i++) {
    if (liValues[i].indexOf(searchQuery) > -1) {
      liElements[i].classList.remove("hide");
    } else {
      liElements[i].classList.add("hide");
    }
  }
});

function getLiValues() {
  let liValues = [];
  for (let element of liElements) {
    liValues.push(element.innerHTML.toLowerCase());
  }
  return liValues;
}
