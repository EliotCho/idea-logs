const paste_here = document.getElementById("article-comes-here");
const ideaList = document.querySelector(".main-blog");

function renderData() {
  // get the data from local storage, if null it will return an empty array
  let tempStorageObject =
    JSON.parse(localStorage.getItem("tempStorageObject")) || [];

  // if there is no data, return
  if (tempStorageObject.length === 0) return;

  // loop through the data
  if (tempStorageObject.length > 0) {
    console.log(tempStorageObject);
    tempStorageObject.forEach((tempStorageObject) => {
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      const h3 = document.createElement("h3");
      const section = document.createElement("section");
      h2.textContent = tempStorageObject.title;
      p.textContent = tempStorageObject.content;
      h3.textContent = "Posted by: " + tempStorageObject.userName;

      section.appendChild(h2);
      section.appendChild(p);
      section.appendChild(h3);
      ideaList.appendChild(section);
    });
  } else {
    console.log("No data to render");
  }
}

renderData();
