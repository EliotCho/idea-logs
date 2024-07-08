const content_submit = document.querySelector("#content-submit");
// const ideaList = document.querySelector(".main-blog");

// const tempStorageObject = [];

let tempStorageObjects = localStorage.getItem("tempStorageObject");
let tempStorageObject = tempStorageObjects
  ? JSON.parse(tempStorageObjects)
  : [];

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
    let openBlog = document.createElement("a");
    openBlog.href = "./blog.html";
    // openBlog.target = "_blank"; // Open in new tab
    openBlog.click();

    const article = {
      userName: userName,
      title: title,
      content: content,
    };

    tempStorageObject.push(article);
    localStorage.setItem(
      "tempStorageObject",
      JSON.stringify(tempStorageObject)
    );
    renderData();
    // localStorage.clear();
  }
};

content_submit.addEventListener("click", formSubmit);
