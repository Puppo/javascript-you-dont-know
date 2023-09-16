// Without WeakMap
{
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.clicked = false;
    button.addEventListener("click", () => {
      button.clicked = true;
      const currentButtons = [...document.querySelectorAll(".button")];
      if (currentButtons.every((button) => button.clicked)) {
        console.log("All buttons have been clicked!");
      }
    });
  });
}

// With WeakMap
{
  const buttons = document.querySelectorAll(".button");
  const clicked = new WeakMap();
  buttons.forEach((button) => {
    clicked.set(button, false);
    button.addEventListener("click", () => {
      clicked.set(button, true);
      const currentButtons = [...document.querySelectorAll(".button")];
      if (currentButtons.every((button) => clicked.get(button))) {
        console.log("All buttons have been clicked!");
      }
    });
  });
}