function rotateArray(inputArr, num) {

    let currentElem = "";

    for (let i = 0; i < num; i++) {

        currentElem = inputArr.pop();
        inputArr.unshift(currentElem);
    }
    
    console.log(inputArr.join(" "));

}

rotateArray(['1', '2', '3', '4'], 2);
console.log("------------------------------------------------");
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);