function revealWords(words, sentence) {

    let sentenceArr = sentence.split(" ");
    let wordsArr = words.split(", ");

    wordsArr.forEach(element => {
        let asteriskWord = "*".repeat(element.length);

        sentence = sentence.replace(asteriskWord, element);
        // for (let i = 0; i < sentenceArr.length; i++) {
        //     if (asteriskWord === sentenceArr[i]) sentenceArr[i] = element;
        // }  //Това беше моето решение, но на Иво е по-практично и съответно използва методите на string.
    });

    // return console.log(sentenceArr.join(" "));
    return console.log(sentence);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
console.log("----------------------------------------------------------------------");
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');