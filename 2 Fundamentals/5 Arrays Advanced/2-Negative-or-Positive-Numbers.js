function negativeOrPositiveNumbers(arrNumbs) {

    arrNumbs = arrNumbs.map(Number);
    arrLen = arrNumbs.length;
    let newArrNumb = [];
    let tmpNumb = 0;

    for (let i = 0; i < arrLen; i++) {
        tmpNumb = arrNumbs.shift()
        if (tmpNumb >= 0) newArrNumb.push(tmpNumb);
        else newArrNumb.unshift(tmpNumb);
    }
    return console.log(newArrNumb.join("\n"));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);