const leftSliderButton = document.getElementById("left-button");
const rightSliderButton = document.getElementById("right-button");
const images = document.getElementsByTagName("img");
const dots = document.getElementsByClassName("dot");
const photoCounter = document.getElementById("photoIndex");

class Slider {
  constructor() {
    this.current_index = 0;
    this.image_quantity = images.length;
  }

  showPreviousImage() {
    images[this.current_index].classList.remove("active");
    dots[this.current_index].classList.remove("active");
    this.current_index--;
    this.changeImage();
  }

  showNextImage() {
    images[this.current_index].classList.remove("active");
    dots[this.current_index].classList.remove("active");
    this.current_index++;
    this.changeImage();
  }

  checkCurrentIndex() {
    if (this.current_index < 0) {
      this.current_index = this.image_quantity - 1;
    } else if (this.current_index >= this.image_quantity) {
      this.current_index = 0;
    }
  }

  changeImage() {
    this.checkCurrentIndex();
    images[this.current_index].classList.add("active");
    dots[this.current_index].classList.add("active");
    photoCounter.innerHTML = this.current_index + 1 + "/" + this.image_quantity;
  }
}

let slider = new Slider();

leftSliderButton.addEventListener(
  "click",
  slider.showPreviousImage.bind(slider)
);
rightSliderButton.addEventListener("click", slider.showNextImage.bind(slider));
