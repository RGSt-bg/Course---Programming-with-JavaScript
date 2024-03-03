function extract(content) {

    let pattern = /\([\d\w ]+\)/gm;
    let result = "";
    let parenthesisRes = "";
    let inputText = document.getElementById(content).textContent;

    if ((parenthesisRes = inputText.match(pattern)) !== null)
        for (let i = 0; i < parenthesisRes.length; i++) {
            parenthesisRes[i] = parenthesisRes[i].substring(1, parenthesisRes[i].length - 1);
        }
    result = parenthesisRes.join("; ");
    return result;
}