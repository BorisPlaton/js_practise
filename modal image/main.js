const blockPhoto = document.querySelector(".modal-photo");
const closeModalPhoto = document.querySelector("#close-image");
const modal = document.querySelector(".modal");

blockPhoto.addEventListener("click", (event) => {
  modal.style.display = "flex";
});

closeModalPhoto.addEventListener("click", (event) => {
  modal.style.display = "none";
});
