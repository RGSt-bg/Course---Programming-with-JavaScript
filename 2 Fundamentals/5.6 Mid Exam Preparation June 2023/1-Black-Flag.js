function blackFlag(inputArr) {

    let days = Number(inputArr[0]);
    let dailyPlunder = Number(inputArr[1]);
    let expectedPlunder = Number(inputArr[2]);
    let allPlunder = 0;

    for (i = 1; i <= days; i++) {
        allPlunder += dailyPlunder;
        if (i % 3 === 0) allPlunder += dailyPlunder * 0.5;
        if (i % 5 === 0) allPlunder = allPlunder * 0.7;
    }

        if (allPlunder >= expectedPlunder) console.log(`Ahoy! ${allPlunder.toFixed(2)} plunder gained.`);
        else console.log(`Collected only ${(allPlunder / expectedPlunder * 100).toFixed(2)}% of the plunder.`)
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);