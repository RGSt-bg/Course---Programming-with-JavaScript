function sameNumbers(inputNum) {

    let flag = true;
    let sumDigits = 0;
    inputNum = inputNum.toString();

    for (let i = 0; i < inputNum.length; i++) {
        if (Number(inputNum[0]) != Number(inputNum[i])) flag = false;
        sumDigits += Number(inputNum[i]);
    }

    console.log(flag);
    console.log(sumDigits);
}

sameNumbers(2222222);
console.log("-------");
sameNumbers(1234);