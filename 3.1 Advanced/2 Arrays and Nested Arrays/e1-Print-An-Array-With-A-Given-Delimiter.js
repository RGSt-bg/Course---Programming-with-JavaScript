function printAnArrayWithAGivenDelimiter(inputArr, inputStr) {

    console.log(inputArr.join(inputStr));
}

printAnArrayWithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
console.log("-------------------------------------------------");
printAnArrayWithAGivenDelimiter(['How about no?', 'I','will', 'not', 'do', 'it!'], '_');