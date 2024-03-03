function greatestCommonDivisor(numOne, numTwo) {

    let numTemp = 0;

    if (numOne < numTwo) {
        numTemp = numOne;
        numOne = numTwo;
        numTwo = numTemp;
    }

    numTemp = numOne % numTwo;
    while (numTemp > 0) {
        numOne = numTwo;
        numTwo = numTemp;
        numTemp = numOne % numTwo;
    }

    console.log(numTwo);
}

greatestCommonDivisor(15, 5);
console.log("-------");
greatestCommonDivisor(2154, 458);