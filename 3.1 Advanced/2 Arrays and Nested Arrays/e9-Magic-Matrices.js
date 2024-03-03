function magicMatrices(inputArr) {

    let comparisonArr = [];
    let flag = true;

    inputArr.forEach(element => {
        let result = element.reduce((a, b) => {return a + b});
        comparisonArr.push(result);
    });

    result = 0;
    for (let j = 0; j < inputArr[0].length; j++) {

        for (let i = 0; i < inputArr.length; i++) {

            result += inputArr[i][j];
        }
        comparisonArr.push(result);
        result = 0;
    }

    for (let i = 1; i < comparisonArr.length; i++) {

        if (comparisonArr[i - 1] !== comparisonArr[i]) {
            flag = false;
            break;
        }
    }

    console.log(flag);
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
console.log("-------");
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
console.log("-------");
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);