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

    const article = {
      userName: userName,
      title: title,
      content: content,
    };

    console.log(article.userName);
    console.log(article.title);
    console.log(article.content);

    tempStorageObject.push(article);
    localStorage.setItem(
      "tempStorageObject",
      JSON.stringify(tempStorageObject)
    );
    renderData();
    // document.querySelector("#username").value = "";
    // document.querySelector("#idea-title").value = "";
    // document.querySelector("#idea-description").value = "";
    // localStorage.clear();
    // setTimeout(() => {
    //   window.location.href = "./blog.html";
    // }, 100);
  }
}

content_submit.addEventListener("click", formSubmit);
