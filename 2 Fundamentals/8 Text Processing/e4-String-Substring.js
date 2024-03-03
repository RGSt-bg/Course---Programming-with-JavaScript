function stringSubstring(word, text) {

    text = text.toLowerCase();
    word = word.toLowerCase();
    let flag = true;
    let wordsArr = text.split(" ");

    for (let element of wordsArr)

    if (element === word) {
            return console.log(word);
        }
        else flag = false;

    if (!flag) console.log(`${word} not found!`);
}

stringSubstring('javascript', 'JavaScript is the best programming language');
console.log("---------------");
stringSubstring('python', 'JavaScript is the best programming language');