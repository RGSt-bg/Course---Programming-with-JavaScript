window.addEventListener("load", solve);

function solve() {
  let firstNameRef = document.getElementById("first-name");
  let lastNameRef = document.getElementById("last-name");
  let ageRef = document.getElementById("age");
  let storyTitleRef = document.getElementById("story-title");
  let genreRef = document.getElementById("genre");
  let storyRef = document.getElementById("story");
  let publishBtnRef = document.getElementById("form-btn");
  let previewRef = document.getElementById("preview-list");
  let openRef = document.querySelector(".orange").parentElement.parentElement.children[1];
  let saveBtn;
  let editBtn;
  let deleteBtn;

  publishBtnRef.addEventListener("click", moveToPreview);
  publishBtnRef.removeEventListener("click", moveToPreview);

  function moveToPreview(event) {

    if (!firstNameRef.value || !lastNameRef.value || !ageRef.value || 
      !storyTitleRef.value || !storyRef.value) return;

    let domTree = createDomElement();
    previewRef.appendChild(domTree);
    
    deleteInputFields();
    
  }

  function createDomElement() {

    let listItemEl = document.createElement("li");
    listItemEl.className = "story-info";
    let articleEl = document.createElement("article");

        /*articleEl.innerHTML = `
            <h3>${taskRef.value}</h3>
            <p>${descriptionRef.value}</p>
            <p>${dateRef.value}</p>
            <div class="flex">
                <button class="green">Start</button>
                <button class="red">Delete</button>
            </div>
        `;*/

        let headingName = document.createElement("h4");
    headingName.id = "previewName";
    headingName.textContent = `Name: ${firstNameRef.value} ${lastNameRef.value}`;
    let paragraphAge = document.createElement("p");
    paragraphAge.id = "previewAge";
    paragraphAge.textContent = `Age: ${ageRef.value}`;
    let paragraphTitle = document.createElement("p");
    paragraphTitle.id = "previewTitle";
    paragraphTitle.textContent = `Title: ${storyTitleRef.value}`;
    let paragraphGenre = document.createElement("p");
    paragraphGenre.id = "previewGenre";
    paragraphGenre.textContent = `Genre: ${genreRef.value}`;
    let paragraphStory = document.createElement("p");
    paragraphStory.id = "previewStory";
    paragraphStory.textContent = storyRef.value;

    saveBtn = document.createElement("button");
    saveBtn.className = "save-btn";
    saveBtn.textContent = "Save Story";
    saveBtn.addEventListener("click", saveStory);
    editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit Story";
    editBtn.addEventListener("click", editStory);
    deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete Story";
    deleteBtn.addEventListener("click", deleteStory);

    articleEl.appendChild(headingName);
    articleEl.appendChild(paragraphAge);
    articleEl.appendChild(paragraphTitle);
    articleEl.appendChild(paragraphGenre);
    articleEl.appendChild(paragraphStory);
    listItemEl.appendChild(articleEl);
    listItemEl.appendChild(saveBtn);
    listItemEl.appendChild(editBtn);
    listItemEl.appendChild(deleteBtn);

    return listItemEl;
  }

  function deleteInputFields() {
    firstNameRef.value = "";
    lastNameRef.value = "";
    ageRef.value = "";
    storyTitleRef.value = "";
    genreRef.value = "";
    storyRef.value = "";
    publishBtnRef.disabled = true;
    }

    function saveStory(event) {

      event.target.parentElement.parentElement.parentElement.remove(document.getElementsByClassName("story-info"));
      document.getElementsByClassName("form-wrapper")[0].parentElement.removeChild(document.getElementsByClassName("form-wrapper")[0]);
      let headingEnd = document.createElement("h1");
      headingEnd.textContent = "Your scary story is saved!";
      document.getElementById("main").appendChild(headingEnd);
    }
  
    function editStory(event) {

      let previewNameValue = document.getElementById("previewName").textContent;
      let previewAgeValue = document.getElementById("previewAge").textContent;
      let previewTitleValue = document.getElementById("previewTitle").textContent;
      let previewGenreValue = document.getElementById("previewGenre").textContent;
      let previewStoryValue = document.getElementById("previewStory").textContent;

      [firstNameRef.value, lastNameRef.value] = previewNameValue.substring(6, ).split(" ");
      ageRef.value = Number(previewAgeValue.split(" ")[1]);
      storyTitleRef.value = previewTitleValue.substring(7, );
      genreRef.value = previewGenreValue.substring(7, );
      storyRef.value = previewStoryValue;

      deleteStory(event);
    }
  
    function deleteStory(event) {
      event.target.parentElement.remove(document.getElementsByClassName("story-info"));
      publishBtnRef.disabled = false;
    }
  
}
