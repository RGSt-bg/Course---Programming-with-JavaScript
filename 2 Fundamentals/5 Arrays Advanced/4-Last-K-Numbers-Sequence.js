function lastKNumbersSequence(n, k) {

    let arrNumbs = [1];

    while (arrNumbs.length < n) {

        let sum = 0;
        let tmpArr = arrNumbs.slice(- k);
        for (let i = 0; i < tmpArr.length; i++) sum += tmpArr[i];
        arrNumbs.push(sum);
    }
    console.log(arrNumbs.join(" "));
}

lastKNumbersSequence(6, 3);
// lastKNumbersSequence(8, 2);