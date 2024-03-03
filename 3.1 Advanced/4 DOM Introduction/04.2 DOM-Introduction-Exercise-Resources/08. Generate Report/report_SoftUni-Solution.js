function generateReport() {
    let inputElements = Array.from(document.getElementsByTagName("input"));
    let tableRows = Array.from(document.getElementsByTagName("tr"));
    let textAreaRef = document.getElementById("output");
    let checkedBoxesArr = [];
    let outputArr = [];
 
    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        const obj = {};
 
        for (let j = 0; j < row.children.length; j++) {
            const element = row.children[j];
            if (i == 0) {
                if (element.children[0].checked) {
                    checkedBoxesArr.push(j);
                }
                continue;
            }
 
            if (checkedBoxesArr.includes(j)) {
                let propertyName = inputElements[j].name;
                obj[propertyName] = element.textContent;
            }
        }
        if (i !== 0) {
            outputArr.push(obj);
        }
    }
 
    outputArr = JSON.stringify(outputArr);
    textAreaRef.value = outputArr;
}