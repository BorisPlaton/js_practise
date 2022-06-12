const startProgressBarButton = document.querySelector("#start-progress-bar");
const resetProgressBarButton = document.querySelector("#reset-progress-bar");
const progressBar = document.querySelector(".inner-progress-bar");

startProgressBarButton.addEventListener("click", () => {
  let widthPercents = 0;
  let id = setInterval(() => {
    if (progressBar.style.width != "100%") {
      progressBar.style.width = widthPercents++ + "%";
    } else {
      clearInterval(id);
    }
  }, 15);
});

resetProgressBarButton.addEventListener("click", () => {
  progressBar.style.width = "0%";
});
