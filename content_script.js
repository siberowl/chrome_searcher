document.addEventListener("keypress", (event) => {
  // check that an input field is not in focus
  if (window.getComputedStyle(document.activeElement).cursor !== "text") {
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
    if (document.activeElement && searchBox !== null) {
      if (event.key === "/") {
        event.preventDefault();
        setTimeout(() => searchBox.focus(), 0);
      }
    }
  }
});
