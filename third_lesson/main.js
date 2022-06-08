const inputBlock = document.getElementById("input-block");

setInputValues();
inputBlock.addEventListener("input", setInputValues);

function setInputValues() {
  let testBlock = document.getElementById("test-block");
  let rangeInputs = document.querySelectorAll("input[type=range]");
  let textInputs = document.querySelectorAll("input[type=text]");

  for (let i = 0; i < 4; i++) {
    let rangeValue = rangeInputs[i].value;
    let cssRangeValue = rangeValue + "px";
    textInputs[i].value = rangeValue;

    switch (i) {
      case 0:
        testBlock.style.borderTopLeftRadius = cssRangeValue;
        break;
      case 1:
        testBlock.style.borderTopRightRadius = cssRangeValue;
        break;
      case 2:
        testBlock.style.borderBottomLeftRadius = cssRangeValue;
        break;
      case 3:
        testBlock.style.borderBottomRightRadius = cssRangeValue;
        break;
    }
  }
}
