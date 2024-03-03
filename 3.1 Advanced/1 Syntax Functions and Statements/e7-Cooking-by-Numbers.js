function cookingByNumbers(inputNum, oper0, oper1, oper2, oper3, oper4) {

    let operation = "";
    inputNum = Number(inputNum);

    for (let i = 0; i < 5; i++) {
        operation = eval("oper" + i);

        switch (operation) {

            case "chop": {
                inputNum /= 2;
                console.log(inputNum);
                break;
            }
            case "dice": {
                inputNum = Math.sqrt(inputNum);
                console.log(inputNum);
                break;
            }
            case "spice": {
                inputNum += 1;
                console.log(inputNum);
                break;
            }
            case "bake": {
                inputNum *= 3;
                console.log(inputNum);
                break;
            }
            case "fillet": {
                inputNum *= 0.8;
                console.log((inputNum.toFixed(1)));
                break;
            }
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log("-------");
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');