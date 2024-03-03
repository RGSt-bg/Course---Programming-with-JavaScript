function negativeAndPositiveNumbers(inputArr) {

    let tmpNumber = 0;
    let outputArr = [];

    for (let i = 0; i < inputArr.length; i++) {

        if (inputArr[i] < 0) {
            tmpNumber = Number(inputArr.splice(i, 1));
            outputArr.unshift(tmpNumber);
            i--;
        }
        else {
            tmpNumber = Number(inputArr.splice(i, 1));
            outputArr.push(tmpNumber);
            i--;
        }
    }

    console.log(outputArr.join("\n"));
}

negativeAndPositiveNumbers([7, -2, 8, 9]);
console.log("-----");
negativeAndPositiveNumbers([3, -2, 0, -1]);