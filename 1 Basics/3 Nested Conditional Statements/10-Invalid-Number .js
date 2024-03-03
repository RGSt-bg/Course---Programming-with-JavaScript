function invalidNumber(input) {

    let num = Number(input[0]);

    if (num < 100 && num != 0)
        console.log("invalid");
    if (num > 200)
        console.log("invalid");

}

invalidNumber(["0"]);