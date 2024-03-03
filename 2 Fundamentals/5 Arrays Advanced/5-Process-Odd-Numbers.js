function processOddNumbers(arrNumbs) {

    let arrOdds = [];

    for (let i = 0; i < arrNumbs.length; i++) {

        if (i % 2 !== 0) arrOdds.push(arrNumbs[i] * 2);
    }
    arrOdds.reverse();
    return console.log(arrOdds.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);