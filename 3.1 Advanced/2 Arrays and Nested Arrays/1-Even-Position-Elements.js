function evenPositionElements(inputArr) {

    let stringToPrint = "";

    for (let i = 0; i < inputArr.length; i += 2) {
        stringToPrint += inputArr[i] + " ";
    }
    stringToPrint = stringToPrint.trim();
    console.log(stringToPrint);
}

evenPositionElements(['20', '30', '40', '50', '60']);
console.log("---------------------------------");
evenPositionElements(['5', '10']);