function heartDelivery(inputArr) {

    let houses = inputArr.shift().split("@").map(x => Number(x));
    let housesFlags = [];
    let j = 0;
    let i = 0;
    let sum = 0;
    let [action, jump] = inputArr[j].split(" ");
    jump = Number(jump);

    for (let j = 0; j < houses.length; j++) housesFlags.push(0);

    for (let j = 0; j < inputArr.length; j++) {

        [action, jump] = inputArr[j].split(" ");
        jump = Number(jump);

        if (action !== "Love!") {
        
            if (action == "Jump" && i + jump < houses.length) {

                if (houses[i + jump] - 2 < 0) houses[i + jump] = 0;
                else houses[i + jump] -= 2;

                if (houses[i + jump] <= 0 && housesFlags[i + jump] == 0) {
                    housesFlags[i + jump] = 1;
                    console.log(`Place ${i + jump} has Valentine's day.`);
                }
                else if (houses[i + jump] == 0 && housesFlags[i + jump] == 1) console.log(`Place ${i + jump} already had Valentine's day.`);
                
                i += jump;
            }
            else {
                if (houses[0] - 2 < 0) houses[0] = 0;
                else houses[0] -= 2;

                if (houses[0] <= 0 && housesFlags[0] == 0) {
                    housesFlags[0] = 1;
                    console.log(`Place 0 has Valentine's day.`);
                }
                else if (houses[0] == 0 && housesFlags[0] == 1) console.log(`Place 0 already had Valentine's day.`);

                i = 0;
            }
        }
        else console.log(`Cupid's last position was ${i}.`);
    }
    for (let j = 0; j < housesFlags.length; j++) sum += housesFlags[j];

    if (sum === housesFlags.length) console.log("Mission was successful.");
    else console.log(`Cupid has failed ${housesFlags.length - sum} places.`)

}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
heartDelivery(["4@2@4@2", "Jump 1", "Jump 2", "Jump 1", "Jump 2", "Jump 2", "Jump 2", "Love!"]);