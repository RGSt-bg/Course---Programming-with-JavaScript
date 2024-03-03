function sorting(arrNumbs) {

    let arrSortingNumbs = [];
    let tempNumb = 0;
    let countFor = arrNumbs.length / 2;

    arrNumbs = arrNumbs.sort((a, b) => a-b);

    for (i = 0; i < countFor; i++) {

        tempNumb = arrNumbs.pop();
        arrSortingNumbs.push(tempNumb);
        tempNumb = arrNumbs.shift();
        arrSortingNumbs.push(tempNumb);
    }

    return console.log(arrSortingNumbs.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);