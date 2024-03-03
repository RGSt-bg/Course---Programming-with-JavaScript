function biggerHalf(inputArr) {

    let outputArr = [];
    let beginIndex = 0;
    if (inputArr.length % 2 !== 0) beginIndex = Math.round(inputArr.length / 2) - 1;
    else beginIndex = Math.round(inputArr.length / 2);

    inputArr.sort((a, b) => a - b);

    for (let i = beginIndex; i < inputArr.length; i++) {

        outputArr.push(inputArr[i]);
    }

    return outputArr;
    // console.log(outputArr);
}

biggerHalf([4, 7, 2, 5]);
console.log("---------------------------------");
biggerHalf([3, 19, 14, 7, 2, 19, 6]);