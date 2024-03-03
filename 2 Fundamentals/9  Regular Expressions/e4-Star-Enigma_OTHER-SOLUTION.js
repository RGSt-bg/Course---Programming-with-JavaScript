function starEnigma(input) {
    let numberMsg = input.shift();
    let decryptedArr = [];

    for (let i = 0; i < numberMsg; i++) {
        let pattern = /[SsTtAaRr]/g;

        if (pattern.test(input[i]) !== false) {
            let decriptKey = input[i].match(pattern).length;
            let decrypted = '';

            for (let char of input[i]) {
                let charCode = char.charCodeAt() - decriptKey;
                decrypted += String.fromCharCode(charCode);
            }

            decryptedArr.push(decrypted);   
        }
    }

    let attackedPlanets = [];
    let destroyedPlanets = [];
    
    for (let msg of decryptedArr) {
        let ifMatch = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>[\d]+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>[\d]+)/g.exec(msg);
        
        if (ifMatch !== null) {
            if (ifMatch.groups.attackType === 'D') {
                destroyedPlanets.push(ifMatch.groups.name);
            } else {
                attackedPlanets.push(ifMatch.groups.name)
            }
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.sort((a, b) => a.localeCompare(b));

    for (let planet of attackedPlanets) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.sort((a,b) => a.localeCompare(b));

    for (let planet of destroyedPlanets) {
        console.log(`-> ${planet}`);
    }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
console.log("----------------------------------------------");
starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);