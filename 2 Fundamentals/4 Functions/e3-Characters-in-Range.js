function charactersInRange(str1, str2) {

    let printStr = "";
    let minChar = Math.min(str1.charCodeAt(), str2.charCodeAt());
    let maxChar = Math.max(str1.charCodeAt(), str2.charCodeAt());

    for (let i = minChar + 1; i < maxChar; i++) printStr += String.fromCharCode(i) + " ";

    return console.log(printStr);
}

charactersInRange('a','d');
charactersInRange('#',':');
charactersInRange('C','#');