function sumOfNumbersNtoM(n, m) {

    let numOne = Number(n);
    let numTwo = Number(m);
    let sumOfNumbers = 0;

    for (let i = numOne; i <= numTwo; i++) {
        sumOfNumbers += i;
    }

    console.log(sumOfNumbers);
}

sumOfNumbersNtoM('1', '5' );
console.log("-------");
sumOfNumbersNtoM('-8', '20');