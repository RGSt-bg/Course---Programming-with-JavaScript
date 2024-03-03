function shopping(input) {

    let budget = Number(input[0]);
    let vcard = Number(input[1]);
    let proc = Number(input[2]);
    let ram = Number(input[3]);

    let allSum = vcard * 250 + proc * (vcard * 250 * 0.35) + ram * (vcard * 250 * 0.1);
    
    if (vcard > proc)
        {allSum = allSum * 0.85;}

    let difference = Math.abs(budget - allSum).toFixed(2);

    if (budget >= allSum)
        {console.log(`You have ${difference} leva left!`)}
    else {console.log(`Not enough money! You need ${difference} leva more!`)}
        
}

shopping(["920.45","3","1","1"]);