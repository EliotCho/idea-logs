const content_submit = document.querySelector("#content-submit");
const formSubmit = function (event) {
  event.preventDefault();

  const userName = document.querySelector("#username").value.trim();
  const title = document.querySelector("#idea-title").value.trim();
  const content = document.querySelector("#idea-description").value.trim();

  if (userName == "" || userName.trim() == " ") {
    alert("Incomplete, please fill out the form");
  } else if (title == "" || title.trim() == " ") {
    alert("Incomplete, please fill out the form");
  } else if (content == "" || content.trim() == " ") {
    alert("Incomplete, please fill out the form");
  } else {
    alert("Form submitted successfully");

    let newTab = document.createElement("a");
    newTab.href = "./blog.html";
    // newTab.target = "_blank"; // Open in new tab
    newTab.click();
  }

  const ideaMap = {
    userName: userName,
    title: title,
    content: content,
  };
};
