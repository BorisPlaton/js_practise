function alertSelectedOption() {
  let selectedOptionIndex =
    document.getElementById("selectInput").selectedIndex;
  let options = document.getElementById("selectInput").options;

  alert(`Выбрана опция ${options[selectedOptionIndex].value}`);
}

function outputRangeValue() {
  let range = document.getElementById("range");
  let paragraphe = document.getElementById("rangeValue");
  paragraphe.innerHTML = range.value;
}

function passValueToRange() {
  let range = document.getElementById("secondRange");
  let rangeInputValue = +document.getElementById("rangeInput").value;
  console.log(rangeInputValue);
  range.value = rangeInputValue;
}

function passValueToRange() {
  let range = document.getElementById("secondRange");
  let rangeInputValue = +document.getElementById("rangeInput").value;
  console.log(rangeInputValue);
  range.value = rangeInputValue;
}

function resizeDiv() {
  let range = document.getElementById("thirdRange");
  let div = document.getElementById("container");

  div.style.width = range.value + "px";
}
