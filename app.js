let parentdiv = document.querySelector(".wrapperPosition");
let div = document.querySelector(".wrapperChild");
let clicked = false;
div.addEventListener("click", (e) => {
  document.querySelector("audio").volume = 0.3;
  document.querySelector("audio").play();
  if (clicked) {
    div.children[0].innerHTML = "Off";
    div.style.boxShadow = `-3px -3px 2px rgb(17, 17, 17), 3px 3px 2px rgb(0, 0, 0)`;
  } else {
    div.children[0].innerHTML = "On";
    div.style.boxShadow = `-3px -3px 2px rgb(17, 17, 17), 3px 3px 2px rgb(0, 0, 0),
    inset -3px -3px 2px rgb(27, 27, 27), inset 3px 3px 2px rgb(0, 0, 0)`;
  }
  clicked = !clicked;
});
parentdiv.addEventListener("mousemove", (e) => {
  if (clicked === true) {
    div.style.top = e.clientY - 50 + "px";
    div.style.left = e.clientX - 50 + "px";
  }
});
// This code official by narayan neupane
