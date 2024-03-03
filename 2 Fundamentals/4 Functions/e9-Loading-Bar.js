function loadingBar(num) {

    let percentCnt = 0;
    let dotCnt = 0;

    percentCnt = num / 10;
    dotCnt = 10 - percentCnt;

    if (percentCnt === 10) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
    else {
        console.log(`${num}% [${"%".repeat(percentCnt)}${".".repeat(dotCnt)}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(30);
loadingBar(70);
loadingBar(100);