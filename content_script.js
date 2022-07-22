const targetIsInput = (target) => {
  const isInput = false;

  if (
    window.getComputedStyle(target).cursor === "text" ||
    target.contentEditable ||
    target.tagName.toLowerCase() === "input" ||
    target.tagName.toLowerCase() === "textarea"
  ) {
    isInput = true;
  }

  return isInput;
};

document.addEventListener("keypress", (event) => {
  // check if key is /
  if (event.key === "/") {
    // check that an input field is not in focus
    if (!targetIsInput(document.activeElement)) {
      // select all input boxes
      let inputBoxes = document.querySelectorAll("input");
      let searchBox = null;
      // choose the upper most as the search bar
      inputBoxes.forEach((inputBox) => {
        if (inputBox.type === "text" || inputBox.type === "search") {
          if (
            inputBox.offsetParent != null &&
            inputBox.style.display != "none"
          ) {
            if (
              searchBox === null ||
              inputBox.clientTop < searchBox.clientTop
            ) {
              searchBox = inputBox;
            }
          }
        }
      });
      if (searchBox !== null) {
        event.preventDefault();
        setTimeout(() => searchBox.focus(), 0);
      }
    }
  }
});
