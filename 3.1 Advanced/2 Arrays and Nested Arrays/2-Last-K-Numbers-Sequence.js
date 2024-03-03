function lastKNumbersSequence(n, k) {

    let outputArr = [1];
    let sumElem = 0;

    for (let i = 1; i < n; i++) {
        
        if (i - k <= 0) {
            for (let j = 0; j < i; j++) sumElem += outputArr[j];
            outputArr.push(sumElem);
            sumElem = 0;
        }
        else {
            for (let j = i - k; j < i; j++) sumElem += outputArr[j];
            outputArr.push(sumElem);
            sumElem = 0;
        }
    }

    return outputArr;
    // console.log(outputArr);
}

lastKNumbersSequence(6, 3);
console.log("---------------------------------");
lastKNumbersSequence(8, 2);