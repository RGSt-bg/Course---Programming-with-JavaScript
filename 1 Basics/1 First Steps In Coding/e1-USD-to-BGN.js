function usdToBGN(input) {

    let usd = Number(input[0]);
    let bgn = usd * 1.79549;

    console.log(bgn.toFixed(5)); //toFixed(n) закръглява до n знака след десетичната запетая.
};

usdToBGN(["22"]);