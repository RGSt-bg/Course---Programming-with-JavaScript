window.addEventListener('load', solution);

function solution() {

  const addBtnRef = document.getElementById("add-btn");
  let editBtnRef = null;
  let continueBtnRef = null;
  let resolvedBtnRef = null;

  const formRef = document.getElementsByTagName("form")[0];
  formRef.onsubmit = moveToPreview;

  const employeeRef = document.getElementById("employee");
  const categoryRef = document.getElementById("category");
  const urgencyRef = document.getElementById("urgency");
  const teamRef = document.getElementById("team");
  const descriptionRef = document.getElementById("description");

  const previewRef = document.querySelector(".preview-list");
  const pendingRef = document.querySelector(".pending-list");
  const resolvedRef = document.querySelector(".resolved-list");

  let liElem = document.createElement("li");

  function moveToPreview(e) {

    e.preventDefault();
    const formData = new FormData(e.target);
    const {employee, category, urgency, team, description} = Object.fromEntries(formData);
    
    if (!employee || !category || !urgency || !team || !description) return;

    liElem.className = "problem-content";
    liElem.innerHTML = `
              <article>
                <p id="myEmployee">From: ${employee}</p>
                <p id="myCategory">Category: ${category}</p>
                <p id="myUrgency">Urgency: ${urgency}</p>
                <p id="myTeam">Assigned to: ${team}</p>
                <p id="myDescription">"Description: ${description}"</p>
              </article>
              <button class="edit-btn">Edit</button>
              <button class="continue-btn">Continue</button>
    `;

    previewRef.appendChild(liElem);
    editBtnRef = document.getElementsByClassName("edit-btn")[0];
    editBtnRef.addEventListener("click", editProblem);
    continueBtnRef = document.getElementsByClassName("continue-btn")[0];
    continueBtnRef.addEventListener("click", moveToPending);

    addBtnRef.disabled = true;

    deleteInputFields();
  }

  function editProblem(e) {

    // let articleRef = e.target.parentNode.querySelector(".personal-info"); // The code it's not for this task!!!
    // let arrOfParagraphs = Array.from(articleRef.children);
    // let arrValues = [];

    // for (element of arrOfParagraphs) {
    //   arrValues.push(element.textContent);
    // }
 
    // nameRef.value = arrValues[0];
    // emailRef.value = arrValues[1];
    // contactNumberRef.value = arrValues[2];
    // classTypeRef.value = arrValues[3];
    // classTimeRef.value = arrValues[4];
 
    // if (liElem) {
    //   liElem.remove();
    // }
  
    // submitBtnRef.disabled = false;
  }

  function moveToPending(e) {
    
    if (editBtnRef) {
      editBtnRef.remove();
    }

    if (continueBtnRef) {
      continueBtnRef.remove();
    }
    
    pendingRef.appendChild(liElem);

    resolvedBtnRef = document.createElement("button");
    resolvedBtnRef.className = "resolve-btn";
    resolvedBtnRef.textContent = "Resolved";
    liElem.appendChild(resolvedBtnRef);
    resolvedBtnRef.addEventListener("click", moveToResolved);
  }

  function moveToResolved(e) {
    
    if (resolvedBtnRef) {
      resolvedBtnRef.remove();
    }

    resolvedRef.appendChild(liElem);

    clearBtnRef = document.createElement("button");
    clearBtnRef.className = "clear-btn";
    clearBtnRef.textContent = "Clear";
    liElem.appendChild(clearBtnRef);
    clearBtnRef.addEventListener("click", clearProblem);
  }

  function clearProblem(e) {

    if (liElem) {
      liElem.remove();
    }
    addBtnRef.disabled = false;
  }

  function deleteInputFields() {
    employeeRef.value = "";
    categoryRef.value = "";
    urgencyRef.value = "";
    teamRef.value = "";
    descriptionRef.value = "";
  }
}


    
    
