function extractIncreasingSubsequenceFromArray(inputArr) {

    let currentNum = inputArr[0];
    let outputArr = [currentNum];

    for (let i = 0; i < inputArr.length; i++) {

        if (currentNum <= inputArr[i + 1]) {
        
            currentNum = inputArr[i + 1]
            outputArr.push(currentNum);
        }
    }

    // return outputArr;
    console.log(outputArr);
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log("----------------------------------");
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
console.log("----------------------------------");
extractIncreasingSubsequenceFromArray([20, 3, 2, 15,6, 1]);