function aggregateElements(inputArr) {

    let sumElemets = 0;
    let sumInverseElemets = 0;
    let concatElements = "";

    for (let i = 0; i < inputArr.length; i++) {
        sumElemets += inputArr[i];
        sumInverseElemets += 1 / inputArr[i];
        concatElements = concatElements.concat(inputArr[i]);
    }

    console.log(sumElemets);
    console.log(sumInverseElemets);
    console.log(concatElements);
}

aggregateElements([1, 2, 3]);
console.log("-----------------------------");
aggregateElements([2, 4, 8, 16]);