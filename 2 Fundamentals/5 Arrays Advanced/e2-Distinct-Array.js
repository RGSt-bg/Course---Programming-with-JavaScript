function distinctArray(arrNumbs) {

    let resultArr = [];

    for (const numb of arrNumbs) { //for-of - добре е да се използва, по-лесно е с него!!!
        if (!resultArr.includes(numb)) resultArr.push(numb);
    }

    return console.log(resultArr.join(" "));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);