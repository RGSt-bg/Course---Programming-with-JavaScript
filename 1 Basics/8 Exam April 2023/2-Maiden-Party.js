function maidenParty(Input)
{
    let partyPrice = Number(Input[0]);
    let loveMessages = Number(Input[1]); //0.60
    let waxRoses = Number(Input[2]);     //7.20
    let keyHolders = Number(Input[3]);   //3.60
    let cartoons = Number(Input[4]);     //18.20
    let surprises = Number(Input[5]);    //22.00
    let sum = 0;

    sum = loveMessages * 0.6 + waxRoses * 7.2 + keyHolders * 3.6 + cartoons * 18.2 + surprises * 22;

    if (loveMessages + waxRoses + keyHolders + cartoons + surprises >= 25) sum = sum * 0.65;
    sum = sum * 0.9;

    if (partyPrice <= sum)
    {
        sum = sum - partyPrice;
        console.log(`Yes! ${sum.toFixed(2)} lv left.`);
    }
    else
    {
        sum = partyPrice - sum;
        console.log(`Not enough money! ${sum.toFixed(2)} lv needed.`);
    }

}

maidenParty(["320","8","2","5","5","1"]);