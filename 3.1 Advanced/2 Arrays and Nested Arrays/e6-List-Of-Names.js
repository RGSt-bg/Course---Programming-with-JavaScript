function listOfNames(inputArr) {

    inputArr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < inputArr.length; i++) {

        console.log(`${i + 1}.${inputArr[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);