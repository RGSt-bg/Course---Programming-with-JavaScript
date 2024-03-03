function cleverLily(input)
{
    let age = Number(input[0]);
    let priceWM = Number(input[1]);
    let priceToy = Number(input[2]);
    let moneyBD = 0.00;
    let giftBD = 10.00;

    for (i = 2; i <= age; i = i + 2)
    {
        moneyBD = moneyBD + giftBD - 1.00;
        giftBD = giftBD + 10.00;
    }

    for (i = 1; i <= age; i = i + 2)
    {
        moneyBD = moneyBD + priceToy;
    }

    if (moneyBD >= priceWM)
    {
        moneyBD = moneyBD - priceWM;
        console.log(`Yes! ${moneyBD.toFixed(2)}`);
    }
    else
    {
        moneyBD = priceWM - moneyBD;
        console.log(`No! ${moneyBD.toFixed(2)}`);
    }

}

cleverLily(["21","1570.98","3"]);