window.addEventListener("load", solution);

function solution() {

  let employeeRef = document.getElementById("employee");
  let categoryRef = document.getElementById("category");
  let urgencyRef = document.getElementById("urgency");
  let teamRef = document.getElementById("team");
  let descriptionRef = document.getElementById("description");
  let previewRef = document.querySelector(".preview-list");
  let pendingRef = document.querySelector(".pending-list");
  let resolvedRef = document.querySelector(".resolved-list");
  let addBtnRef = document.getElementById("add-btn");

  addBtnRef.addEventListener("click", moveToPreview);

  function moveToPreview(event) {

    event.preventDefault();

    let domTree = createDomElement();
    previewRef.appendChild(domTree);
    addBtnRef.disabled = true;

    deleteInputFields();
  }

    function createDomElement() {

    let listItemEl = document.createElement("li");
    listItemEl.className = "problem-content";
    let articleEl = document.createElement("article");

        articleEl.innerHTML = `
          <p>From: ${employeeRef.value}</P>
          <p>Category: ${categoryRef.value}</p>
          <p>Urgency: ${urgencyRef.value}</p>
          <p>Assigned to: ${teamRef.value}</p>
          <p>Description: ${descriptionRef.value}</p>`;

    editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editInfo);

    continueBtn = document.createElement("button");
    continueBtn.className = "continue-btn";
    continueBtn.textContent = "Continue";
    continueBtn.addEventListener("click", continueInfo);

    listItemEl.appendChild(articleEl);
    listItemEl.appendChild(editBtn);
    listItemEl.appendChild(continueBtn);

    return listItemEl;
  }

    function continueInfo(event) {
      pendingRef.appendChild(previewRef);
    }
  
    function deleteInputFields() {
      employeeRef.value = "";
      categoryRef.value = "";
      urgencyRef.value = "";
      teamRef.value = "";
      descriptionRef.value = "";
    }

      function editInfo(event) {

      let editDataNode = document.querySelectorAll(".problem-content article p");
      let editData = [];

      for (let i = 0; i < editDataNode.length; i++) {
        editData.push(editDataNode[i].innerText);
      }

      employeeRef.value = editData[0].substring(6, );
      categoryRef.value = editData[1].substring(10, );
      urgencyRef.value = editData[2].substring(9, );
      teamRef.value = editData[3].substring(13, );
      descriptionRef.value = editData[4].substring(13, );

      deleteInfo(event);
    }
  
    function deleteInfo(event) {
      event.target.parentElement.remove();
      addBtnRef.disabled = false;
    }
  
}
