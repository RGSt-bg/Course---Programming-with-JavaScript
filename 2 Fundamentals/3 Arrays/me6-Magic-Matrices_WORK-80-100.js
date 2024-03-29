function magicMatrices(inputArr) {

    let sum = 0;
    let sum1 = 0;
    let flag = true;

    sum = sumRows(inputArr[0]);

    for (let i = 1; i < inputArr.length; i++)
        if (sum !== sumRows(inputArr[i])) return console.log(!flag);

    for (let i = 0; i < inputArr[0].length; i++) {
        for (let j = 0; j < inputArr[0].length; j++) sum1 += inputArr[j][i];

        if (sum !== sum1) return console.log(!flag);
        sum1 = 0;
    }
    console.log(flag);

    function sumRows(arr) {

        let sumR = 0;
        for (let l = 0; l < arr.length; l++) sumR += arr[l];
        return sumR;
    }

}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45],[21, 0, 1],[21, 1, 1]]);
magicMatrices([[1, 0, 0],[0, 0, 1],[0, 1, 0]]);