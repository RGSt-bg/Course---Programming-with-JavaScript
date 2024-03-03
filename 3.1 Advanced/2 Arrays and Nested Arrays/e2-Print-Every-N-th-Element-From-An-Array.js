function printEveryNthElementFromAnArray(inputArr, num) {

    let outputArr = [];

    for (let i = 0; i < inputArr.length; i += num) {

        outputArr.push(inputArr[i]);
    }

    // return outputArr;
    console.log(outputArr);
}

printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);
console.log("-----------------------------------------");
printEveryNthElementFromAnArray(['dsa','asd', 'test', 'tset'], 2);
console.log("-----------------------------------------");
printEveryNthElementFromAnArray(['1', '2','3', '4', '5'], 6);