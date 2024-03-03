function factorialDivision(num1, num2) {

    function factorial(num) {
        if (num === 0) return 1;
        else return num * factorial(num - 1);
    }

    return console.log((factorial(num1) / factorial(num2)).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);