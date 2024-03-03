function diagonalSums(inputArr) {

    let countRowsColls = inputArr[0].length - 1;
    let outputStr = "";
    let sum = 0;

    for (let i = 0; i <= countRowsColls; i++) sum += inputArr[i][i];
    outputStr += sum + " ";
    sum = 0;

    for (i = 0; i <= countRowsColls; i++)
        for (j = countRowsColls; j >= 0; j--)
            if (i + j === countRowsColls) sum += inputArr[i][j];

    outputStr += sum + " ";
    return console.log(outputStr.trim());
}

diagonalSums([[20, 40],
              [10, 60]]);
console.log("-------");
diagonalSums([[3,  5, 17],
              [-1, 7, 14],
              [1, -8, 89]]);