window.addEventListener('load', solution);

function solution() {
 
  const submitBtnRef = document.getElementById("next-btn");
  let editBtnRef = null;
  let continueBtnRef = null;
  let cancelBtnRef = null;
  let confirmBtnRef = null;
 
  submitBtnRef.addEventListener("click", moveToPreview)

  const nameRef = document.getElementById("name");
  const emailRef = document.getElementById("email");
  const contactNumberRef = document.getElementById("contact-number");
  const classTypeRef = document.getElementById("class-type");
  const classTimeRef = document.getElementById("class-time");
 
  const previewRef = document.querySelector(".class-info");
  const confirmRef = document.querySelector(".confirm-class");
 
  let liElem = document.createElement("li");
 
  function moveToPreview(e) {
 
    e.preventDefault();
 
    if (!nameRef.value || !emailRef.value || !contactNumberRef.value || !classTypeRef.value || !classTimeRef.value) return;
 
    liElem.className = "info-item";
    liElem.innerHTML = `
              <article class="personal-info">
                <p>${nameRef.value}</p>
                <p>${emailRef.value}</p>
                <p>${contactNumberRef.value}</p>
                <p>${classTypeRef.value}</p>
                <p>${classTimeRef.value}</p>
              </article>
              <button class="edit-btn">Edit</button>
              <button class="continue-btn">Continue</button>
    `;
 
    previewRef.appendChild(liElem);
    editBtnRef = document.getElementsByClassName("edit-btn")[0];
    editBtnRef.addEventListener("click", editProblem);
    continueBtnRef = document.getElementsByClassName("continue-btn")[0];
    continueBtnRef.addEventListener("click", moveToConfirm);
 
    submitBtnRef.disabled = true;
 
    deleteInputFields();
  }
 
  function editProblem(e) {

    let articleRef = e.target.parentNode.querySelector(".personal-info");
    let arrOfParagraphs = Array.from(articleRef.children);
    let arrValues = [];

    for (element of arrOfParagraphs) {
      arrValues.push(element.textContent);
    }
 
    nameRef.value = arrValues[0];
    emailRef.value = arrValues[1];
    contactNumberRef.value = arrValues[2];
    classTypeRef.value = arrValues[3];
    classTimeRef.value = arrValues[4];
 
    if (liElem) {
      liElem.remove();
    }
  
    submitBtnRef.disabled = false;
  }
 
  function moveToConfirm(e) {
 
    if (editBtnRef) {
      editBtnRef.remove();
    }
 
    if (continueBtnRef) {
      continueBtnRef.remove();
    }
 
    confirmRef.appendChild(liElem);
 
    cancelBtnRef = document.createElement("button");
    cancelBtnRef.className = "cancel-btn";
    cancelBtnRef.textContent = "Cancel";
    liElem.appendChild(cancelBtnRef);
    cancelBtnRef.addEventListener("click", clearProblem);

    confirmBtnRef = document.createElement("button");
    confirmBtnRef.className = "confirm-btn";
    confirmBtnRef.textContent = "Confirm";
    liElem.appendChild(confirmBtnRef);
    confirmBtnRef.addEventListener("click", visualFinalMessage);
  }
 
  function visualFinalMessage(e) {
 
    document.getElementById("body").innerHTML = `
        <footer>
          <p>Exam @ SoftUni</p>
        </footer>
        <script src="app.js"></script>

        <h1 id="thank-you">"Thank you for scheduling your appointment, we look forward to seeing you!"</h1>
        <button id="done-btn">Done</button>
    `;
    document.getElementById("done-btn").addEventListener("click", refreshPage);
  }
 
  function clearProblem(e) {
 
    if (liElem) {
      liElem.remove();
    }
    submitBtnRef.disabled = false;
  }

  function deleteInputFields() {
    nameRef.value = "";
    emailRef.value = "";
    contactNumberRef.value = "";
    classTypeRef.value = "";
    classTimeRef.value = "";
  } 

  function refreshPage(e) {
    window.location.reload()
  }
}

    
    
