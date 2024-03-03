function processOddPositions(inputArr) {

    let outputArr = [];

    for (let i = 1; i < inputArr.length; i += 2) outputArr.push(inputArr[i] * 2);

    return console.log(outputArr.reverse().join(" "));
}

processOddPositions([10, 15, 20, 25]);
console.log("------------");
processOddPositions([3, 0, 10, 4, 7, 3]);