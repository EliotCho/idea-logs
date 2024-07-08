const theme = document.getElementById("theme");
let themeColor = document.getElementById("theme-color");

theme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  colorChange();
});

function colorChange() {
  myColor = themeColor.textContent
  if (myColor == "Light") {
    themeColor.textContent = "Dark";
  } else {
    themeColor.textContent = "Light";
  }
}
