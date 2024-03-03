function equalNeighbors(inputArr) {

    let equalElem = 0;
    let rows = inputArr.length;
    let cols = inputArr[0].length;
    

    for (let j = 0; j < cols; j++) {

        for (let i = 0; i < rows; i++) {

            if (j !== cols - 1)
                if (inputArr[i][j] === inputArr[i][j + 1]) equalElem++;
            if (i !== rows - 1)
                if (inputArr[i][j] === inputArr[i + 1][j]) equalElem++;
        }
    }

    return equalElem;
    // console.log(equalElem);
}

equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]);
console.log("---");
equalNeighbors([['test', 'yes', 'yo', 'ho'],
                ['well', 'done', 'yo', '6'],
                ['not', 'done', 'yet', '5']]);