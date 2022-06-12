const numberInputs = document.querySelectorAll("input");
const operationButtons = document.querySelectorAll("button");
const result = document.getElementById("result");

numberInputs.forEach((element) => {
  element.addEventListener("keyup", validateInput);
});

operationButtons.forEach((element) => {
  element.addEventListener("click", getAnswer);
});

function getAnswer(event) {
  let answer = calculateNumbers(event.target.innerHTML);
  result.innerHTML = !isNaN(answer) ? answer : "-";
}

function validateInput(element) {
  let parent = element.target.closest(".inner-block");
  let errorText = parent.querySelectorAll(".error")[0];

  if (element.target.value) {
    if (isNaN(element.target.value)) {
      errorText.style.display = "inline";
      disableOperationButtons();
    } else {
      errorText.style.display = "none";
      activateOperationButtons();
    }
  } else {
    errorText.style.display = "none";
    disableOperationButtons();
  }
}

function disableOperationButtons() {
  for (button of operationButtons) {
    button.disabled = true;
  }
}

function calculateNumbers(opearation) {
  let first_num = +numberInputs[0].value;
  let second_num = +numberInputs[1].value;
  let answer;
  console.log(opearation);
  switch (opearation) {
    case "+":
      answer = first_num + second_num;
      break;
    case "-":
      answer = first_num - second_num;
      break;
    case "*":
      answer = first_num * second_num;
      break;
    case "/":
      answer = first_num / second_num;
      break;
  }
  return answer;
}

function activateOperationButtons() {
  for (button of operationButtons) {
    button.disabled = false;
  }
}
