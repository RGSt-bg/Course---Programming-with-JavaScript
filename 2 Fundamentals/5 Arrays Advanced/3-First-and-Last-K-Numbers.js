function firstAndLastKNumbers(arrNumbs) {

    let k = arrNumbs.shift();

    let arr = arrNumbs.slice(0, k);
    console.log(arr.join(" "));

    arr = arrNumbs.slice(-k);
    console.log(arr.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);