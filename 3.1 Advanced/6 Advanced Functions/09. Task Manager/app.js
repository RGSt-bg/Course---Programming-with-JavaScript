function solve() {
    let taskRef = document.getElementById("task");
    let descriptionRef = document.getElementById("description");
    let dateRef = document.getElementById("date");
    let openRef = document.querySelector(".orange").parentElement.parentElement.children[1];
    let inProgressRef = document.getElementById("in-progress");
    let completeRef = document.querySelector(".green").parentElement.parentElement.children[1];
    let addBtnRef = document.getElementById("add");
    let startBtn;
    let finishBtn;
    let deleteBtn;
  
    addBtnRef.addEventListener("click", moveToOpen);

    function moveToOpen(event) {

        event.preventDefault();
        if(!taskRef.value || !descriptionRef.value || !dateRef.value) return;

        let domTree = createDomElement();
        openRef.appendChild(domTree);

        taskRef.value = "";
        descriptionRef.value = "";
        dateRef.value = "";
    }

    function createDomElement() {

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

        let openTask = document.createElement("h3");
        openTask.id = "openTask";
        openTask.textContent = taskRef.value;

        let openDescription = document.createElement("p");
        openDescription.id = "openDescription";
        openDescription.textContent = `Description: ${descriptionRef.value}`;
    
        let openDueDate = document.createElement("p");
        openDueDate.id = "openDate";
        openDueDate.textContent = `Due Date: ${dateRef.value}`;
    
        let divElement = document.createElement("div");
        divElement.className = "flex";
    
        startBtn = document.createElement("button");
        startBtn.className = "green";
        startBtn.textContent = "Start";
        startBtn.addEventListener("click", startTask);

        deleteBtn = document.createElement("button");
        deleteBtn.className = "red";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", deleteTask);

        articleEl.appendChild(openTask);
        articleEl.appendChild(openDescription);
        articleEl.appendChild(openDueDate);
        divElement.appendChild(startBtn);
        divElement.appendChild(deleteBtn);
        articleEl.appendChild(divElement);

        return articleEl;
    }

    function startTask(event) {
        let startingTask = event.target.parentElement.parentElement;
        inProgressRef.appendChild(startingTask);

        let classFlex = event.target.parentElement;
        classFlex.children[0].remove();
        classFlex.children[0].remove();

        deleteBtn = document.createElement("button");
        deleteBtn.className = "red";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", deleteTask);

        finishBtn = document.createElement("button");
        finishBtn.className = "orange";
        finishBtn.textContent = "Finish";
        finishBtn.addEventListener("click", finishTask);

        classFlex.appendChild(deleteBtn);
        classFlex.appendChild(finishBtn);
    }

    function finishTask(event) {
        let finishingTask = event.target.parentElement.parentElement;
        completeRef.appendChild(finishingTask);
        event.target.parentElement.remove();
    }

    function deleteTask(event) {
        let delTask = event.target;
        delTask.parentElement.parentElement.remove();
    }
}