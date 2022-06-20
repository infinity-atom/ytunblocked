function showMenu() {
    var menu = document.getElementById("menuObj");
    
    if(menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

// RIPPLE BUTTON CODE

const rippleButton = document.querySelector(".ripple-button");

function mousePositionToCustomProp(event, element) {
  let posX = event.offsetX;
  let posY = event.offsetY;

  element.style.setProperty("--x", posX + "px");
  element.style.setProperty("--y", posY + "px");
}

rippleButton.addEventListener("click", (e) => {
  mousePositionToCustomProp(e, rippleButton);
  rippleButton.classList.add("pulse");
  rippleButton.addEventListener(
    "animationend",
    () => {
      rippleButton.classList.remove("pulse");
    },
    { once: true }
  );
});
