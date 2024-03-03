function attachEvents() {
    const mainURL = "http://localhost:3030/jsonstore/phonebook/";
    const loadBtnRef = document.getElementById("btnLoad");
    const createBtnRef = document.getElementById("btnCreate");

    const phonebookRef = document.getElementById("phonebook");
    const personRef = document.getElementById("person");
    const phoneRef = document.getElementById("phone");

    loadBtnRef.addEventListener("click", onLoad);
    createBtnRef.addEventListener("click", onCreate);

    async function onLoad(e) {
        phonebookRef.innerHTML = "";
        let liElement;
        let deleteBtn;
        let loadResponse = await fetch(mainURL);
        if (!loadResponse === 200) return alert("Error in response!");
        let loadInfo = await loadResponse.json();
        Object.values(loadInfo).forEach(element => {
            deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", onDelete);

            liElement = document.createElement("li");
            liElement.id = element._id;
            liElement.textContent = `${element.person}: ${element.phone}`;
            liElement.append(deleteBtn);

            phonebookRef.appendChild(liElement);
        });
        return;
    }

    async function onCreate(e) {
        let createObj = {};
        if (personRef.value && phoneRef.value) {
            createObj = {
            "person": personRef.value,
            "phone": phoneRef.value
          };
          let createResponse = await fetch(mainURL, {
            "method": 'POST',
            "headers": { 'Content-type': 'application/json' },
            "body": JSON.stringify(createObj)
            });
        }
        else return;
        personRef.value = "";
        phoneRef.value = "";
        onLoad(e);
    }

    async function onDelete(e) {
        let id = e.target.parentElement.id;
        let deleteResponse = await fetch(mainURL + id, {
            "method": 'DELETE',
            "headers": { 'Content-type': 'application/json' }
            });
        e.target.parentElement.remove();
        onLoad(e);
    }
}

attachEvents();