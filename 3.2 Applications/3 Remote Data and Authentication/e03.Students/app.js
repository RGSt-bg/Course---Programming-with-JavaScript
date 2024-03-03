const mainURL = "http://localhost:3030/jsonstore/collections/students/";

const submitBtnRef = document.getElementById("submit");
submitBtnRef.addEventListener("click", onSubmit);

const tableBodyRef = document.querySelector("tbody");
const inputData = document.getElementById("form").querySelectorAll(".inputs input");

const firstNameRef = inputData[0];
const lastNameRef = inputData[1];
const facultyNumberRef = inputData[2];
const gradeRef = inputData[3];

document.addEventListener("DOMContentLoaded", async function onLoad() {
    tableBodyRef.innerHTML = "";
    let tr;
    let td;
    let onLoadResponse = await fetch(mainURL);
    if (!onLoadResponse === 200) return alert("Error in response!");
    let onLoadInfo = await onLoadResponse.json();
    Object.values(onLoadInfo).forEach(element => {
        tr = document.createElement("tr");
        tr.id = element._id;
        td = document.createElement("td");
        td.textContent = element.firstName;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = element.lastName;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = element.facultyNumber;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = Number(element.grade).toFixed(2);
        tr.appendChild(td);
        tableBodyRef.appendChild(tr);
    });
    return;
  });

async function onSubmit(e) {
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let facultyNumber = facultyNumberRef.value;
    let grade = Number(gradeRef.value);

    if(!firstName || !lastName || !facultyNumber || !grade)
        alert("Incomplete data!");
    else {
        if (grade > 6) grade = 6;
        else if (grade < 2) grade = 2;
        let createObj = {};
            createObj = {
            "firstName": firstName,
            "lastName": lastName,
            "facultyNumber": facultyNumber,
            "grade": grade
          };
        let createResponse = await fetch(mainURL, {
            "method": 'POST',
            "headers": { 'Content-type': 'application/json' },
            "body": JSON.stringify(createObj)
        });
    }
    onLoad();
    return;
}