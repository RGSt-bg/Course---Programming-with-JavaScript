function wordTracker(inputArr) {

    let wordsMap = new Map();
    let wordsArr = inputArr.shift().split(" ");

    for (let i = 0; i < wordsArr.length; i++) {
        
        wordsMap.set(wordsArr[i], 0);
        inputArr.forEach(element => {
             if (wordsArr[i] === element) wordsMap.set(wordsArr[i], wordsMap.get(element)+1);
        });
    }

    let wordsPrint = Array.from(wordsMap.entries());
    wordsPrint.sort((a, b) => b[1] - a[1]);

    wordsPrint.forEach(element => {
        console.log(element.join(" - "));
    });
}

wordTracker(['this sentence','In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the',
             'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
console.log("--------------------");
wordTracker(['is the','first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);