document.addEventListener("keypress", (event) => {
  // check if key is /
  if (event.key === "/") {
    const target = document.activeElement;
    // check that an input field is not in focus
    if (!targetIsInput(target)) {
      focusOnSearchBox();
    }
  }
});

const targetIsInput = (target) => {
  let isInput = false;

  if (
    window.getComputedStyle(target).cursor === "text" ||
    target.contentEditable === "true" ||
    target.tagName.toLowerCase() === "input" ||
    target.tagName.toLowerCase() === "textarea"
  ) {
    isInput = true;
  }

  return isInput;
};

const focusOnSearchBox = () => {
  let searchBox = getSearchBox();
  if (searchBox !== null) {
    event.preventDefault();
    // wait for blur to finish
    setTimeout(() => searchBox.focus(), 0);
  }
};

const getSearchBox = () => {
  // select all input boxes
  let inputBoxes = document.querySelectorAll("input");
  let searchBox = null;
  // choose the upper most as the search bar
  inputBoxes.forEach((inputBox) => {
    if (inputBox.type === "text" || inputBox.type === "search") {
      if (inputBox.offsetParent != null && inputBox.style.display != "none") {
        if (searchBox === null || inputBox.clientTop < searchBox.clientTop) {
          searchBox = inputBox;
        }
      }
    }
  });
  return searchBox;
};
