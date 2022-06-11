const openModalButton = document.getElementById("openModal");
const modalWindow = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-modal");

closeModalButton.addEventListener("click", () => {
  if (modalWindow.style.display == "block") {
    modalWindow.style.display = "none";
  }
});

openModalButton.addEventListener("click", () => {
  modalWindow.style.display = "block";
});
