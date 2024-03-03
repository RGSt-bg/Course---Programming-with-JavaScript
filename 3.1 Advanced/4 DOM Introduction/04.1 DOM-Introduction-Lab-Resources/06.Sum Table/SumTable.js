function sumTable() {

    let sum = 0;
    
    for (let i = 1; i < document.querySelectorAll("tr td").length - 2; i += 2) {

        if (Number(document.querySelectorAll("tr td")[i].textContent) !== NaN)
        sum += Number(document.querySelectorAll("tr td")[i].textContent);
    }

    document.getElementById("sum").textContent = sum;
}