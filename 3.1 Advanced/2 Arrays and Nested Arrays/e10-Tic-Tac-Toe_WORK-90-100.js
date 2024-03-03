function ticTacToe(inputArr) {

    let initialArr = [[false, false, false], [false, false, false], [false, false, false]];
    let winsCombinationsArr = [["0 0", "0 1", "0 2"], ["1 0", "1 1", "1 2"], ["2 0", "2 1", "2 2"], 
                               ["0 0", "1 0", "2 0"], ["0 1", "1 1", "2 1"], ["0 2", "1 2", "2 2"],
                               ["0 0", "1 1", "2 2"], ["0 2", "1 1", "2 0"]];
    let counter = 9;
    let playersSign = "X";

    for (let i = 0; i < inputArr.length; i++) {

        if (counter === 0) {
            console.log("The game ended! Nobody wins :(");
            break;
        }

        let  [row, col] = inputArr[i].split(" ");
        row = Number(row);
        col = Number(col);

        if (initialArr[row][col] !== false) console.log("This place is already taken. Please choose another!");
        else {
            initialArr[row][col] = playersSign;
            if (checkWinsCombinations()) {
                console.log(`Player ${playersSign} wins!`);
                break;
            }
            counter--;
            if (playersSign === "X") playersSign = "O";
            else playersSign = "X";
        }
    }

    for (let i = 0; i < initialArr.length; i++) console.log(initialArr[i].join("\t"));

    function checkWinsCombinations() {

        let stringXO = "";

        for (let j = 0; j < winsCombinationsArr.length; j++) {

            for (let k = 0; k < winsCombinationsArr[j].length; k++) {
            
                let  [r, c] = winsCombinationsArr[j][k].split(" ");
                r = Number(r);
                c = Number(c);
                stringXO += initialArr[r][c];
            }

            if (stringXO === "XXX" || stringXO === "OOO") {
                return true;
            }
            stringXO = "";
        }
    }
}

ticTacToe(["0 1","0 0","0 2","2 0","1 0","1 1","1 2","2 2","2 1","0 0"]);
console.log("----------------------------------------------------------");
ticTacToe(["0 0","0 0","1 1","0 1","1 2","0 2","2 2","1 2","2 2","2 1"]);
console.log("----------------------------------------------------------");
ticTacToe(["0 1","0 0","0 2","2 0","1 0","1 2","1 1","2 1","2 2","0 0"]);