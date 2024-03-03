function numberModification(numb) {

    let arrDigits = numb.toString().split("");
    let avgNumb = 0;

    while (avgNumb <= 5) {

        avgNumb = avg(arrDigits);
        if (avgNumb <= 5) arrDigits.push(9);
        else break;
    }
    
    function avg(arrDigits) {
        let sum = 0;
        for (let i = 0; i < arrDigits.length; i++) sum += Number(arrDigits[i]);
        return sum / arrDigits.length;
    }

    return console.log(Number(arrDigits.join("")));
}

numberModification(101);