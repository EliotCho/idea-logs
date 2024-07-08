// const h2 = document.createElement("h2");
// const p = document.createElement("p");
// const h3 = document.createElement("h3");

function renderData() {
  console.log("renderData is running");
  // get the data from local storage
  let tempStorageObject =
    JSON.parse(localStorage.getItem("tempStorageObject")) || [];

  // if there is no data, return
  if (tempStorageObject.length === 0) return;

  // ideaList.innerHTML = "";

  // loop through the data
  if (tempStorageObject.length > 0) {
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");
    const section = document.createElement("section");
    const ideaList = document.querySelector(".main-blog");
    tempStorageObject.forEach((tempStorageObject) => {
      h2.textContent = tempStorageObject.title;
      p.textContent = tempStorageObject.content;
      h3.textContent = tempStorageObject.userName;

      h2.setAttribute("idea-title", h2.textContent);
      p.setAttribute("idea-description", p.textContent);
      h3.setAttribute("username", h3.textContent);

      ideaList.appendChild(section);
      section.appendChild(h2);
      section.appendChild(p);
      section.appendChild(h3);
    });
  } else {
    console.log("No data to render");
  }
}