function extractText() {
    
    let input = document.getElementsByTagName("li");
    let textArea = document.getElementById("result");
    let result = "";

    for (const tag of input) {
        result += tag.textContent + "\n";
    }

    result = result.substring(0, result.length - 1);
    return textArea.textContent = result;
}