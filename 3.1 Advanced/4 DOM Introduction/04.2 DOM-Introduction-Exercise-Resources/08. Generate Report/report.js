function generateReport() {

    let headingTextRef = document.querySelectorAll("thead th");
    let checkBoxesRef = Array.from(document.querySelectorAll("input[type=checkbox]"));
    let inputDataRef = Array.from(document.querySelectorAll("tbody tr td"));
    let textAreaRef = document.getElementById("output");
    let headingTextArr = [];
    let inputDataArr = [];
    let checkedBoxesArr = [];
    let outputArr = [];

    for (let i = 0; i < headingTextRef.length; i++) {
        headingTextArr.push(headingTextRef[i].textContent.trim());
    }

    for (let i = 0; i < checkBoxesRef.length; i++) {
        if (checkBoxesRef[i].checked === true) checkedBoxesArr.push(i);
    }

    if (checkedBoxesArr.length === 0) return;

    for (let i = 0; i < inputDataRef.length; i += headingTextRef.length) {
        let personArr = [];
        for (let j = 0; j < headingTextArr.length; j++) {
            personArr.push(inputDataRef[i + j].textContent);
        }
        inputDataArr.push(personArr);
    }

    for (let i = 0; i < inputDataArr.length; i++) {
        let employeeObj = {};
        for (let j = 0; j < checkedBoxesArr.length; j++) {
            let key = headingTextArr[checkedBoxesArr[j]];
            let value = inputDataArr[i][checkedBoxesArr[j]];

            if (value !== undefined) {
                employeeObj[key] = value;
            } else {
                employeeObj[key] = "";
            }
        }
        outputArr.push(employeeObj);
        employeeObj = {};
    }
    outputArr = JSON.stringify(outputArr);
    textAreaRef.value = outputArr;
}