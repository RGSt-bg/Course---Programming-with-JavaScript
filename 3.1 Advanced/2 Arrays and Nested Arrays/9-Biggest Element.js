function biggestElement(inputArr) {

    let biggestElem = inputArr[0][0];
    
    for (let i = 0; i < inputArr[0].length; i++) {

        for (let j = 0; j < inputArr.length; j++) {

            if (biggestElem < inputArr[j][i]) biggestElem = inputArr[j][i];
        }
    }

    return biggestElem;
    // console.log(biggestElem);
}

biggestElement([[20, 50, 10], [8, 33, 145]]);
console.log("------");
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);