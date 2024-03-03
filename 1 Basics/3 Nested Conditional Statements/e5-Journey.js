function journey(input)
{
    let budget = Number(input[0]);
	let season = input[1]; //"summer", "winter"
    let destination = "";
    let place = "";
    let price = 0.00;

    if (budget > 0 && budget <= 100)
    {
        destination = "Bulgaria";
        if (season == "summer")
        {
            place = "Camp";
            price = budget * 0.3;
        }
        else if (season == "winter")
        {
            place = "Hotel";
            price = budget * 0.7;
        }
        else console.log("There will be no journey!");
    }
    else if (budget > 100 && budget <= 1000)
    {
        destination = "Balkans";
        if (season == "summer")
        {
            place = "Camp";
            price = budget * 0.4;
        }
        else if (season == "winter")
        {
            place = "Hotel";
            price = budget * 0.8;
        }
        else console.log("There will be no journey!");
    }
    else if (budget > 1000)
    {
        destination = "Europe";
        place = "Hotel";
        price = budget * 0.9;
    }
    else console.log("There will be no journey!");

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);

}

journey(["150", "autumn"]);