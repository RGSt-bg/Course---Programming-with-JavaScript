function mathOperations(numOne, numTwo, operator) {

    switch (operator) {

        case "+": { console.log(numOne + numTwo); break; }
        case "-": { console.log(numOne - numTwo); break; }
        case "*": { console.log(numOne * numTwo); break; }
        case "/": { console.log(numOne / numTwo); break; }
        case "%": { console.log(numOne % numTwo); break; }
        case "**": { console.log(numOne ** numTwo); break; }
        default: break;
    }
}

mathOperations(5, 6, '+');
console.log("-------");
mathOperations(3, 5.5, '**');