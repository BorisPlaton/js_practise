function alertCheckBox() {
  let checkbox = document.getElementById("testCheckBox");

  if (checkbox.checked) {
    alert("Selected");
  } else {
    alert("Not selected");
  }
}

function alertRadioButton() {
  let checkboxes = document.getElementsByName("r1");

  for (let radioButton of checkboxes) {
    if (radioButton.checked) {
      alert(`Radio Button с значением value = ${radioButton.value} выбрана`);
    }
  }
}
