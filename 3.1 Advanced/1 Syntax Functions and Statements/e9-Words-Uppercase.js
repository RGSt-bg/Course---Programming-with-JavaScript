function wordsUpperCase(inputStr) {

    let pattern = /(?<word>[a-zA-Z0-9]+)/g;
    let patternGroups;
    let singleWord = "";
    let wordsArr = [];
    let i = 0;

    while ((patternGroups = pattern.exec(inputStr)) !== null) {
        singleWord = patternGroups.groups["word"];
        wordsArr[i] = singleWord.toUpperCase();
        i++;
    }

    console.log(wordsArr.join(", "));
}

wordsUpperCase('Hi, how are you?');
console.log("------------------------------");
wordsUpperCase('hello');
console.log("------------------------------");
wordsUpperCase('•	You may need to use a Regular Expression or check for	 all delimiters that can be found in a sentence (ex. ",", " ", "!", "?" and so on).');