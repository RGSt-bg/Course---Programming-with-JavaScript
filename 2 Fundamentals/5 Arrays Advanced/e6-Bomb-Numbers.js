function bombNumbers(arrNumbs, bombData) {

    let bombNumb = Number(bombData[0]);
    let bombPower = Number(bombData[1]);
    let bombIndex = 0;
    let sum = 0;

    while (arrNumbs.indexOf(bombNumb) !== -1) {
        bombIndex = arrNumbs.indexOf(bombNumb);
        if (bombIndex - bombPower < 0) bombIndex = bombPower;
        arrNumbs.splice(bombIndex - bombPower, 2 * bombPower + 1);
    }

    for (let i = 0; i < arrNumbs.length; i++) sum += arrNumbs[i];

    return console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);