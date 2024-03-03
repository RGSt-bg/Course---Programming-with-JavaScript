function nxNMatrix(num) {

    let printStr = ""; 
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            printStr += num + " ";
        }
        console.log(printStr);
        printStr = ""; 
    }
}

nxNMatrix(7);