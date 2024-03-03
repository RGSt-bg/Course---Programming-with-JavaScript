function wordOccurrences(inputArr) {

    let wordsMap = new Map();

    inputArr.forEach(element => {
        if (!wordsMap.has(element)) wordsMap.set(element, 1);
        else wordsMap.set(element, wordsMap.get(element)+1);
    });

    let wordsPrint = Array.from(wordsMap.entries());
    wordsPrint.sort((a, b) => b[1] - a[1]);

    wordsPrint.forEach(element => {
        console.log(`${element.join(" -> ")} times`);
    });
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another",
                 "sentence", "And", "finally", "the", "third", "sentence"]);
console.log("-------------------------");
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);