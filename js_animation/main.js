const startAnimationButton = document.getElementById("startAnimation");
const animatedBlock = document.querySelector(".animated-block");

startAnimationButton.addEventListener("click", () => {
  let position = animatedBlock.style.top;
  if (animatedBlock.style.top != 0) {
    position = 0;
  }
  let interval = setInterval(() => {
    if (position == 180) {
      clearInterval(interval);
    } else {
      animatedBlock.style.top = position + "px";
      animatedBlock.style.left = position + "px";
      position++;
    }
  }, 10);
});
