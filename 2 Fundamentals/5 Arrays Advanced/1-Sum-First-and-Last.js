function sumFirstAndLast(arrNumbs) {

    arrNumbs = arrNumbs.map(Number);

    console.log(arrNumbs[0] + arrNumbs.pop());
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);