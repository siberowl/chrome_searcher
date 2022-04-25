document.addEventListener("keypress", (event) => {
  // check if key is /
  if (event.key === "/") {
    // check that an input field is not in focus
    if (document.activeElement) {
      if (window.getComputedStyle(document.activeElement).cursor !== "text") {
        focusOnSearchBox();
      }
    }
  }
});

let focusOnSearchBox = () => {
  let searchBox = getSearchBox();
  if (searchBox !== null) {
    event.preventDefault();
    // wait for blur to finish
    setTimeout(() => searchBox.focus(), 0);
  }
};

let getSearchBox = () => {
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
