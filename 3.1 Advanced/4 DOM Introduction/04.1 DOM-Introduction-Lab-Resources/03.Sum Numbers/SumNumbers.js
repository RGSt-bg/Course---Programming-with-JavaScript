function calc() {
    let numOne = Number(document.getElementById("num1").value);
    let numTwo = Number(document.getElementById("num2").value);
    let sumNumbers = 0;

    if (numOne >= 0 && numTwo >= 0) {
        sumNumbers = numOne + numTwo;
    }

    document.getElementById("sum").value = sumNumbers;
}