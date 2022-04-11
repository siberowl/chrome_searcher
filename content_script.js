document.addEventListener("keypress", (event) => {
  let inputBoxes = document.querySelectorAll(
    "input[type = 'text'], input[type = 'search']"
  );
  console.log(inputBoxes);
  let searchBox = inputBoxes[0];
  //select the uppermost input box
  inputBoxes.forEach((inputBox) => {
    if (inputBox.offsetParent != null) {
      if (inputBox.clientTop < searchBox.clientTop) {
        searchBox = inputBox;
      }
    }
  });
  let inputs = ["input", "select", "button", "textarea"];
  if (
    document.activeElement &&
    inputs.indexOf(activeElement.tagName.toLowerCase()) !== -1
  ) {
    if (event.key === "/") {
      event.preventDefault();
      searchBox.focus();
    }
  }
});
