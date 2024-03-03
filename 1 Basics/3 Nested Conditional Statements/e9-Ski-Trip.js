function skiTrip(input)
{
    let days = Number(input[0]);
    let room = input[1];
    let evaluation = input[2];
    let price = 0.00;

    switch (room)
    {
        case "room for one person": price = (days - 1) * 18;
        break;
        case "apartment":
            {
            price = (days - 1) * 25;
            if (days > 0 && days < 10) price = price * 0.7;
            else if (days >= 10 && days <= 15) price = price * 0.65;
            else price = price * 0.5;
            }
        break;
        case "president apartment":
            {
            price = (days - 1) * 35;
            if (days > 0 && days < 10) price = price * 0.9;
            else if (days >= 10 && days <= 15) price = price * 0.85;
            else price = price * 0.8;
            }
        break;
    }

    switch (evaluation)
    {
        case "positive": price = price * 1.25;
        break;
        case "negative": price = price * 0.9;
        break;
    }

    console.log(price.toFixed(2));
}

skiTrip(["2","apartment","positive"]);
