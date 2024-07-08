const content_submit = document.querySelector("#content-submit");

// get the data from local storage
let tempStorageObject =
  JSON.parse(localStorage.getItem("tempStorageObject")) || [];

// function formSubmit() {
// const formSubmit = function (event) {
function formSubmit(event) {
  event.preventDefault();

  const userName = document.querySelector("#username").value.trim();
  const title = document.querySelector("#idea-title").value.trim();
  const content = document.querySelector("#idea-description").value.trim();
  const submissionResponseEl = document.querySelector("#response");

  // if the form is incomplete, return
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

    // create an object to store the form data
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
  }
}

content_submit.addEventListener("click", formSubmit);
