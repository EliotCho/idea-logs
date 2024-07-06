// render data from local storage


// render the data from local storage
function renderData() {
  // get the data from local storage
  const tempStorageObject = JSON.parse(localStorage.getItem('tempStorageObject'));


  ideaList.innerHTML = '';










  // check if the data is not null
  if (tempStorageObject !== null) {
    // loop through the text array and render the text
    tempStorageObject.text.forEach((text) => {
      const p = document.createElement('p');
      p.textContent = text.text;
      p.style.left = text.left;
      p.style.top = text.top;
      moodBoardEl.appendChild(p);
    });
  }
}