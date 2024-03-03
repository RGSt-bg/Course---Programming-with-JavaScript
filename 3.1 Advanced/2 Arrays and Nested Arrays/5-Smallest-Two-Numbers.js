function smallestTwoNumbers(inputArr) {

    inputArr.sort((a, b) => a - b);
    console.log(`${inputArr[0]} ${inputArr[1]}`);
}

smallestTwoNumbers([30, 15, 50, 5]);
console.log("--------");
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);