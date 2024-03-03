function sortingNumbers(inputArr) {

    let tmpNumber = 0;
    inputArr.sort((a, b) => a - b);

    for (let i = 1; i < inputArr.length; i += 2) {

        tmpNumber = inputArr.pop();
        inputArr.splice(i, 0, tmpNumber);
    }

    // return inputArr;
    console.log(inputArr);
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);