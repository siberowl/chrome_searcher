document.addEventListener("keypress", (event) => {
  // select all input boxes
  let inputBoxes = document.querySelectorAll("input");
  let searchBox = null;
  // choose the upper most as the search bar
  inputBoxes.forEach((inputBox) => {
    if (
      inputBox.type === "text" ||
      inputBox.type === "search" ||
      inputBox.type === ""
    ) {
      if (inputBox.offsetParent != null && inputBox.style.display != "none") {
        if (searchBox === null || inputBox.clientTop < searchBox.clientTop) {
          searchBox = inputBox;
        }
      }
    }
  });
  let inputs = ["input", "select", "button", "textarea"];
  // check that an input field is not in focus
  if (document.activeElement && searchBox !== null) {
    if (!inputs.includes(document.activeElement.tagName.toLowerCase())) {
      if (event.key === "/") {
        event.preventDefault();
        setTimeout(() => searchBox.focus(), 0);
      }
    }
  }
});
