window.addEventListener('load', solve);

function solve() {

    const addBtnRef = document.getElementById("add-btn");
    let editBtnRef = null;
    let continueBtnRef = null;
    let finishedBtnRef = null;
    let clearBtnRef = document.getElementById("clear");

    addBtnRef.addEventListener("click", moveToLastCheck);
    clearBtnRef.addEventListener("click", clearProblem);

    const timeRef = document.getElementById("time");
    const dateRef = document.getElementById("date");
    const placeRef = document.getElementById("place");
    const eventNameRef = document.getElementById("event-name");
    const emailRef = document.getElementById("email");

    const lastCheckRef = document.getElementById("check-list");
    const upcomingRef = document.getElementById("upcoming-list");
    const finishedRef = document.getElementById("finished-list");

    let liElem = document.createElement("li");

    function moveToLastCheck(e) {

        e.preventDefault();

        if (!timeRef.value || !dateRef.value || !placeRef.value || !eventNameRef.value || !emailRef.value) return;

        liElem.className = "event-content";
        liElem.innerHTML = `
                <article>
                  <p>Begins: ${dateRef.value} at: ${timeRef.value}</p>
                  <p>In: ${placeRef.value}</p>
                  <p>Event: ${eventNameRef.value}</p>
                  <p>Contact: ${emailRef.value}</p>
                </article>
                <button class="edit-btn">Edit</button>
                <button class="continue-btn">Continue</button>
      `;

        lastCheckRef.appendChild(liElem);
        editBtnRef = document.getElementsByClassName("edit-btn")[0];
        editBtnRef.addEventListener("click", editProblem);
        continueBtnRef = document.getElementsByClassName("continue-btn")[0];
        continueBtnRef.addEventListener("click", moveToUpcoming);

        addBtnRef.disabled = true;

        deleteInputFields();
    }

    function editProblem(e) {

        let articleRef = e.target.parentNode.querySelector("article");
        let arrOfParagraphs = Array.from(articleRef.children);
        let arrValues = []
        for (el of arrOfParagraphs) {
            arrValues.push(el.textContent);
        }

        dateRef.value = arrValues[0].split(" ")[1];
        timeRef.value = arrValues[0].split(" ")[3];
        placeRef.value = arrValues[1].split(": ")[1];
        eventNameRef.value = arrValues[2].split(": ")[1];
        emailRef.value = arrValues[3].split(": ")[1];

        if (liElem) {
            liElem.remove();
        }

        addBtnRef.disabled = false;
    }

    function moveToUpcoming(e) {

        if (editBtnRef) {
            editBtnRef.remove();
        }

        if (continueBtnRef) {
            continueBtnRef.remove();
        }

        upcomingRef.appendChild(liElem);

        finishedBtnRef = document.createElement("button");
        finishedBtnRef.className = "finished-btn";
        finishedBtnRef.textContent = "Move to Finished";
        liElem.appendChild(finishedBtnRef);
        finishedBtnRef.addEventListener("click", moveToFinished);

        addBtnRef.disabled = false;
    }

    function moveToFinished(e) {

        if (finishedBtnRef) {
            finishedBtnRef.remove();
        }

        finishedRef.appendChild(liElem);
    }

    function clearProblem(e) {

        if (liElem) {
            liElem.remove();
        }
        addBtnRef.disabled = false;
    }

    function deleteInputFields() {
        timeRef.value = "";
        dateRef.value = "";
        placeRef.value = "";
        eventNameRef.value = "";
        emailRef.value = "";
    }
}