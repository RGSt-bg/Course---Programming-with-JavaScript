function hotelRoom(input)
{
    let month = input[0]; //May, June, July, August, September, October
    let overnights = Number(input[1]);
    let priceStudio = 0.00;
    let priceApartment = 0.00;

    switch (month)
    {
        case ("May"):
        case ("October"):
        {
            priceStudio = overnights * 50;
            priceApartment = overnights * 65;
            if (overnights > 7 && overnights < 14) priceStudio = priceStudio * 0.95;
            if (overnights > 14) priceStudio = priceStudio * 0.7;
        }
        break;
        case ("June"):
        case ("September"):
        {
            priceStudio = overnights * 75.2;
            priceApartment = overnights * 68.7;
            if (overnights > 14) priceStudio = priceStudio * 0.8;
        }
        break;
        case ("July"):
        case ("August"):
        {
            priceStudio = overnights * 76;
            priceApartment = overnights * 77;
        }
        break;
    }

    if (overnights > 14) priceApartment = priceApartment * 0.9;

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}

hotelRoom(["August","20"]);