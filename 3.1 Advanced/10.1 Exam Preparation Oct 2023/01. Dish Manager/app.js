window.addEventListener("load", solve);

function solve() {
  
  /*  Antoaneta's solution
  const firstNameInputEl = document.getElementById("first-name");
  const lastNameInputEl = document.getElementById("last-name");
  const ageInputEl = document.getElementById("age");
  const genderInputEl = document.getElementById("genderSelect");
  const dishDescriptionInputEl = document.getElementById("task");
  const submitBtnEl = document.getElementById("form-btn");
  const inProgressUlEl = document.getElementById("in-progress");
  const finishedUlEl = document.getElementById("finished");
  const progressCountEl = document.getElementById("progress-count");
  const clearBtnEl = document.getElementById("clear-btn");

  const areInputFieldsEmpty = () => {
    return (
      firstNameInputEl.value.length === 0 ||
      lastNameInputEl.value.length === 0 ||
      ageInputEl.value.length === 0 ||
      genderInputEl.value.length === 0 ||
      dishDescriptionInputEl.value.length === 0
    );
  };

  let counter = 0;

  submitBtnEl.addEventListener("click", addDish);
  clearBtnEl.addEventListener("click", clearFinished);

  function clearFinished() {
    finishedUlEl.innerHTML = "";
  }

  function createInProgressEl() {
    // Create elements
    const listItemEl = document.createElement("li");
    listItemEl.className = "each-line";
    const articleEl = document.createElement("article");
    const headingEl = document.createElement("h4");
    const genderAndAgeEl = document.createElement("p");
    const dishDescriptionEl = document.createElement("p");

    // Add classes and text
    const editBtnEl = document.createElement("button");
    editBtnEl.textContent = "Edit";
    editBtnEl.className = "edit-btn";
    const completeBtnEl = document.createElement("button");
    completeBtnEl.textContent = "Mark as complete";
    completeBtnEl.className = "complete-btn";

    headingEl.textContent = `${firstNameInputEl.value} ${lastNameInputEl.value}`;
    genderAndAgeEl.textContent = `${genderInputEl.value}, ${ageInputEl.value}`;
    dishDescriptionEl.textContent = `Dish description: ${dishDescriptionInputEl.value}`;

    // Add event listeners to edit and complete buttons
    editBtnEl.addEventListener("click", editDish);
    completeBtnEl.addEventListener("click", completeDish);

    // Construct the whole layout
    articleEl.appendChild(headingEl);
    articleEl.appendChild(genderAndAgeEl);
    articleEl.appendChild(dishDescriptionEl);
    articleEl.appendChild(editBtnEl);
    articleEl.appendChild(completeBtnEl);
    listItemEl.appendChild(articleEl);

    // Returned the composed list item
    return listItemEl;
  }

  function completeDish(e) {
    const editedDishEl = e.target.parentNode.parentNode;

    // Clone the pressed dish element
    const clonedDishEl = editedDishEl.cloneNode(true);
    const articleClone = clonedDishEl.querySelector("article");
    const editBtnClone = articleClone.querySelector(".edit-btn");
    const completeBtnClone = articleClone.querySelector(".complete-btn");

    // Remove the buttons from the clone cuz there is no edit or mark as complete functionality there
    articleClone.removeChild(completeBtnClone);
    articleClone.removeChild(editBtnClone);

    // Add the clone into the DOM in the finished section
    finishedUlEl.appendChild(clonedDishEl);

    // Remove the old existing element from the in progress section
    inProgressUlEl.removeChild(editedDishEl);

    removeOneFromProgressCount();
  }

  function editDish(e) {
    const editedDishEl = e.target.parentNode.parentNode;

    const headingText = editedDishEl.querySelector("h4");
    const firstNameAndLastNameText = headingText.textContent.split(" ");
    const firstNameText = firstNameAndLastNameText[0];
    const lastNameText = firstNameAndLastNameText[1];
    firstNameInputEl.value = firstNameText;
    lastNameInputEl.value = lastNameText;

    const genderAndAgeText = editedDishEl
      .querySelector("p")
      .textContent.split(", ");
    const genderText = genderAndAgeText[0];
    const ageText = genderAndAgeText[1];
    genderInputEl.value = genderText;
    ageInputEl.value = ageText;

    const dishDescriptionText = editedDishEl
      .querySelectorAll("p")[1]
      .textContent.replace("Dish description: ", "");
    dishDescriptionInputEl.value = dishDescriptionText;

    removeItemFromInProgress(editedDishEl);
  }

  function removeItemFromInProgress(item) {
    inProgressUlEl.removeChild(item);
  }

  function addDish(e) {
    if (areInputFieldsEmpty()) return;

    const listItemEl = createInProgressEl();
    inProgressUlEl.appendChild(listItemEl);
    clearInputFields();
    addOneToProgressCount();
  }

  function addOneToProgressCount() {
    counter++;
    progressCountEl.textContent = counter;
  }

  function removeOneFromProgressCount() {
    counter--;
    progressCountEl.textContent = counter;
  }

  function clearInputFields() {
    firstNameInputEl.value = "";
    lastNameInputEl.value = "";
    ageInputEl.value = "";
    genderInputEl.value = "";
    dishDescriptionInputEl.value = "";
  }
  */

  /*  georgiev955's solution
  const firstNameEl = document.querySelector('#first-name');
  const lastNameEl = document.querySelector('#last-name');
  const ageEl = document.querySelector('#age');
  const genderEl = document.querySelector('#genderSelect');
  const dishInfoEl = document.querySelector('#task');
  const inProgressUl = document.querySelector('#in-progress');
  const counterEl = document.querySelector('#progress-count');
  const finishedEl = document.querySelector('#finished')
  const clearBtn = document.querySelector('#clear-btn');
  const submitBtn = document.querySelector('#form-btn');
 
  submitBtn.addEventListener('click', submitData);
 
  function submitData(e) {
    e.preventDefault();
 
    const firstName = firstNameEl.value;
    const lastName = lastNameEl.value;
    const age = ageEl.value;
    const gender = genderEl.value;
    const dishInfo = dishInfoEl.value;
 
    if (!firstName || !lastName || !age || !dishInfo) {
      return;
    }
 
    clearInputFields();
    increaseCounter();
    createListElement(firstName, lastName, age, gender, dishInfo);
 
    const editBtns = Array.from(document.querySelectorAll('.edit-btn'));
    editBtns.forEach(button => button.addEventListener('click', editInfo));
 
    const completeBtns = Array.from(document.querySelectorAll('.complete-btn'));
    completeBtns.forEach(button => button.addEventListener('click', completeDish));
 
    clearBtn.addEventListener('click', clearFinishedList);
  }
 
  function increaseCounter() {
    const currentValue = Number(counterEl.textContent);
    counterEl.textContent = currentValue + 1;
  }
 
  function clearInputFields() {
    firstNameEl.value = ''; 
    lastNameEl.value = ''; 
    ageEl.value = ''; 
    genderEl.value = '';
    dishInfoEl.value = ''; 
  }
  function createListElement(firstName, lastName, age, gender, dishInfo){
    const listElement = document.createElement('li');
    listElement.classList.add('each-line');
 
    listElement.innerHTML = `<article>
      <h4>${firstName} ${lastName}</h4>
      <p>${gender}, ${age}</p>
      <p>Dish description: ${dishInfo}</p>
      </article>
      <button class="edit-btn">Edit</button>
      <button class="complete-btn">Mark as complete</button>`
    
    inProgressUl.appendChild(listElement);
  }
 
  function editInfo(e) {
    const listElementRef = e.target.parentElement;
    const articleRef = e.target.parentElement.children[0].children;
    const articleArr = Array.from(articleRef);
 
    firstNameEl.value = articleArr[0].textContent.split(' ')[0];
    lastNameEl.value = articleArr[0].textContent.split(' ')[1];
    ageEl.value = articleArr[1].textContent.split(', ')[1];
    genderEl.value = articleArr[1].textContent.split(', ')[0];
    dishInfoEl.value = articleArr[2].textContent.split(': ')[1]; 
 
    listElementRef.remove();
 
    reduceCounter();
  }
 
  function reduceCounter() {
    const currentValue = Number(counterEl.textContent);
    counterEl.textContent = currentValue - 1;
  }
 
  function completeDish(e) {
    const listElementRef = e.target.parentElement;
    const leftButtonRef = listElementRef.children[1];
    const rightButtonRef = listElementRef.children[2];
    leftButtonRef.remove();
    rightButtonRef.remove();
 
    finishedEl.appendChild(listElementRef);
    reduceCounter();
  }
 
  function clearFinishedList() {
    let finishedList = Array.from(finishedEl.children);
    for (const child of finishedList) {
      child.remove();
    }
  }
  */
}
