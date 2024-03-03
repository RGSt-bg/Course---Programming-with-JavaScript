function printNthElement(inputArr) {

    let step = Number(inputArr[inputArr.length-1]);
    let printStr = "";

    for (i = 0; i < inputArr.length-1; i += step) printStr += inputArr[i] + " ";

    console.log(printStr);
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);