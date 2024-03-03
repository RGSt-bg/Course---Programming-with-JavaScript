function validityChecker(x1, y1, x2, y2) {

    if (Number.isInteger(calcValue(x1, y1, 0, 0))) // {x1, y1} to {0, 0}
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    else console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    if (Number.isInteger(calcValue(x2, y2, 0, 0))) // {x2, y2} to {0, 0}
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    else console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    if (Number.isInteger(calcValue(x1, y1, x2, y2))) // {x1, y1} to {x2, y2}
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

    function calcValue(x1, y1, x2, y2) {
        let powNumOne = 0;
        let powNumTwo = 0;

        powNumOne = Math.pow((x2 - x1), 2);
        powNumTwo = Math.pow((y2 - y1), 2);
        return Math.sqrt(powNumOne + powNumTwo);
    }
}

validityChecker(3, 0, 0, 4);
console.log("------------------------------");
validityChecker(2, 1, 1, 1);