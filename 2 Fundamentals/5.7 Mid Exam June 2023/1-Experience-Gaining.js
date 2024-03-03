function experienceGaining(inputArr) {

    let experNeeded = Number(inputArr.shift());
    let battleCount = 0;
    let allBattle = Number(inputArr.shift());
    let experCurrent = 0;

    for (let i = 1; i <= allBattle; i++) {

        if (experCurrent < experNeeded) {
            if (i % 3 == 0 && i > 0) experCurrent += inputArr[i-1] * 1.15;
            else if (i % 5 == 0 && i > 0) experCurrent += inputArr[i-1] * 0.9;
            else if (i % 15 == 0 && i > 0) experCurrent += inputArr[i-1] * 1.05;
            else experCurrent += inputArr[i-1];
            battleCount++;
        }
    }
    if (experCurrent >= experNeeded) {
            console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
    }
    else console.log(`Player was not able to collect the needed experience, ${(experNeeded - experCurrent).toFixed(2)} more needed.`);
}

experienceGaining([500,5,50,100,200,100,30]);
experienceGaining([500,5,50,100,200,100,20]);
experienceGaining([400,5,50,100,200,100,20]);