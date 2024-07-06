const content_submit = document.querySelector("#content-submit");
// const ideaList = document.querySelector(".main-blog");

const tempStorageObject = [];

const formSubmit = function (event) {
  event.preventDefault();

  const userName = document.querySelector("#username").value.trim();
  const title = document.querySelector("#idea-title").value.trim();
  const content = document.querySelector("#idea-description").value.trim();
  const submissionResponseEl = document.querySelector("#response");

  if (userName == "" || userName.trim() == " ") {
    submissionResponseEl.textContent =
      "Username incomplete, please fill out the form";
  } else if (title == "" || title.trim() == " ") {
    submissionResponseEl.textContent =
      "Title incomplete, please fill out the form";
  } else if (content == "" || content.trim() == " ") {
    submissionResponseEl.textContent =
      "Description incomplete, please fill out the form";
  } else {
    let newTab = document.createElement("a");
    newTab.href = "./blog.html";
    // newTab.target = "_blank"; // Open in new tab
    newTab.click();
  }

  const article = {
    userName: userName,
    title: title,
    content: content,
  };

  localStorage.setItem("tempStorageObject", JSON.stringify(tempStorageObject));
  //   storeData(article);
};

function renderData() {
  // get the data from local storage
  const tempStorageObject = JSON.parse(
    localStorage.getItem("tempStorageObject")
  );

  ideaList.innerHTML = "";
  ideaListLength = tempStorageObject.length; //ideaListLength.textContent

  for (let i = 0; i < tempStorageObject.length; i++) {
    const displayIdea = tempStorageObject[i];

    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");
    h2.textContent = displayIdea.title;
    p.textContent = displayIdea.content;
    h3.textContent = displayIdea.userName;
    h2.setAttribute("idea-title", i);
    p.setAttribute("idea-description", i);
    h3.setAttribute("username", i);

    section.appendChild(h2);
    h2.appendChild(p);
    p.appendChild(h3);
    ideaList.appendChild(section);
  }
}

function init() {
  // Get stored todos from localStorage
  const temp = JSON.parse(localStorage.getItem("tempStorageObject"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (temp !== null) {
    tempStorageObject = temp;
  }

  // This is a helper function that will render todos to the DOM
  storeArticle();
  renderData();
}


function storeArticle() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem('article', JSON.stringify(article));
  }

// function renderLastGrade() {
//   // Use JSON.parse() to convert text to JavaScript object
//   const lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   // Check if data is returned, if not exit out of the function
//   if (lastGrade !== null) {
//     document.getElementById("saved-name").innerHTML = lastGrade.student;
//     document.getElementById("saved-grade").innerHTML = lastGrade.grade;
//     document.getElementById("saved-comment").innerHTML = lastGrade.comment;
//   }
// }



content_submit.addEventListener("click", init());
