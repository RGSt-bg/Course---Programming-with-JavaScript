function addAndSubtract(num1, num2, num3) {

    function sumTwoNums(num1, num2) {
        return num1 + num2;
    }

    function subtract(sumTwoNums, num3) {
        return sumTwoNums - num3;
    }

    return console.log(subtract(sumTwoNums(num1, num2), num3));
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);