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
    localStorage.setItem("theme", "dark");
  } else {
    themeColor.textContent = "Light";
    localStorage.setItem("theme", "light");
  }
}

function checkTheme() {
  let theme = localStorage.getItem("theme");
  if (theme == "dark" && themeColor == "Light") {
    document.documentElement.classList.toggle("dark");
  colorChange();
  } else {
    document.documentElement.classList.toggle("dark");
  colorChange();
  }
}

checkTheme()