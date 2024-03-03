function repeatString(str, n) {

    let finalStr = "";

    for (i = 1; i <= n; i++) finalStr += str;
    
    console.log(finalStr);
}

repeatString("abc", 3);