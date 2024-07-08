const theme = document.getElementById("theme");
let themeColor = document.getElementById("theme-color");

// event listener to toggle the theme changer
theme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  colorChange();
});

// function to changes the displaying theme color text on the button
function colorChange() {
  myColor = themeColor.textContent
  if (myColor == "Light") {
    themeColor.textContent = "Dark";
  } else {
    themeColor.textContent = "Light";
  }
}
