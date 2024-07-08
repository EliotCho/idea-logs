const displayIdea = function () {
  const ideas = readIdea();
  for (const idea of ideas) {
    console.log(idea);
    // const section = document.createElement("section")
    // const h2 = document.createElement("h2")
    // const p = document.createElement("p")
    // const h3 = document.createElement("h3")
    // h2.textContent = idea.title
    // p.textContent = idea.content
    // h3.textContent = idea.userName
    // section.appendChild(h2)
    // h2.appendChild(p)
    // p.appendChild(h3)
    // ideaList.appendChild(section)
  }
};

function renderData() {
  // get the data from local storage
  const tempStorageObject = JSON.parse(
    localStorage.getItem("tempStorageObject")
  );

  ideaList.innerHTML = "";
  ideaListLength = tempStorageObject.length; //ideaListLength.textContent
  console.log("tempStorageObject");
  console.log(localStorage);
  for (let i = 0; i < tempStorageObject.length; i++) {
    const displayIdea = tempStorageObject[i];

    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");
    h2.textContent = displayIdea.title;
    p.textContent = displayIdea.content;
    h3.textContent = displayIdea.userName;
    h2.setAttribute("idea-title", h2.textContent);
    p.setAttribute("idea-description", p.textContent);
    h3.setAttribute("username", h3.textContent);

    section.appendChild(h2);
    h2.appendChild(p);
    p.appendChild(h3);
    ideaList.appendChild(section);
  }
}
