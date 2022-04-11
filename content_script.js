document.addEventListener("keypress", (event) => {
  // select all input boxes
  let inputBoxes = document.querySelectorAll(
    "input[type = 'text'], input[type = 'search']"
  );
  let searchBox = inputBoxes[0];
  // choose the upper most as the search bar
  inputBoxes.forEach((inputBox) => {
    if (inputBox.offsetParent != null) {
      if (inputBox.clientTop < searchBox.clientTop) {
        searchBox = inputBox;
      }
    }
  });
  let inputs = ["input", "select", "button", "textarea"];
  // check that an input field is not in focus
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
