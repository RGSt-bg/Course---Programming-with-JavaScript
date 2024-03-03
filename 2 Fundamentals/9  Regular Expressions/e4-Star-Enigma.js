function starEnigma(inputArr) {

    let countLetters = 0;
    let countMess = Number(inputArr.shift());
    let planetsAttacked = [];
    let planetsDestroyed = [];

    for (let i = 0; i < countMess; i++) {

        let tmpStr = "";
        let pattern = /[STARstar]+/g;
        countLetters = inputArr[i].match(pattern).join("").length;

        if (pattern.test(inputArr[i]) !== false) {
            
            for (let j = 0; j < inputArr[i].length; j++) {
                let tmpChar = inputArr[i].charCodeAt(j);
                tmpStr += String.fromCharCode(tmpChar - countLetters);
            }
        }
        else tmpStr = inputArr[i];

        let planetName = "";
        let attackStatus = "";
        let attackInfo;
        pattern = /@(?<planet>[A-Za-z]+)\w?:(?<population>\d+)!(?<attack>[AD])!->(?<soldiers>\d+)/;

        if (pattern.test(tmpStr) !== false) {
            
            if ((attackInfo = pattern.exec(tmpStr).groups) !== null) {
                planetName = attackInfo["planet"];
                attackStatus = attackInfo["attack"];
            }

            if (attackStatus == "A") {
                planetsAttacked.push(planetName);
            }
            else if (attackStatus == "D") {
                planetsDestroyed.push(planetName);
            }
        }
    }

    planetsAttacked.sort();
    planetsDestroyed.sort();
    console.log(`Attacked planets: ${planetsAttacked.length}`);
    planetsAttacked.forEach(element => console.log(`-> ${element}`));
    console.log(`Destroyed planets: ${planetsDestroyed.length}`);
    planetsDestroyed.forEach(element => console.log(`-> ${element}`));
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
console.log("----------------------------------------------");
starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);