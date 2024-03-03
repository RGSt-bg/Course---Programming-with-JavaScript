function oddOccurrences(inputStr) {

    let inputArr = inputStr.toLowerCase().split(" ");
    let wordsMap = new Map();

    inputArr.forEach(element => {
        if (!wordsMap.has(element)) wordsMap.set(element, 1);
        else wordsMap.set(element, wordsMap.get(element) + 1);
    });

    let wordsPrint = Array.from(wordsMap.entries());

    for (let i = 0; i < wordsPrint.length; i++) {

        let tmpArr = wordsPrint[i];
        if (tmpArr[1] % 2 == 0) {
            wordsPrint.splice(i, 1);
            i--;
        }
    }
    let printStr = "";
    wordsPrint.forEach(element => {
        printStr += element[0] + " ";
    });
    console.log(printStr);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log("------------------------------------");
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');