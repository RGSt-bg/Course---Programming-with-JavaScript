function smallestTwoNumbers(arrNumbs) {

    let arrSorted = arrNumbs.sort((a, b) => {
        return a - b;
    });

    return console.log(arrSorted.slice(0, 2).join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);