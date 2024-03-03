function summerOutfit(input) {

    let degrees = Number(input[0]);
    let timeDay = input[1];

    switch(timeDay)
    {
        case "Morning":
        {
            if (degrees >= 10 && degrees <=18)
                console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
            else if (degrees > 18 && degrees <=24)
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
            else if (degrees >= 25)
                console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
            else
                console.log("It's better to stay in home!");
        break;
        }
        case "Afternoon":
        {
            if (degrees >= 10 && degrees <=18)
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
            else if (degrees > 18 && degrees <=24)
                console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
            else if (degrees >= 25)
                console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
            else
                console.log("It's better to stay in home!");
        break;
        }
        case "Evening":
            {
                if (degrees >= 10 && degrees <=18)
                    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
                else if (degrees > 18 && degrees <=24)
                    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
                else if (degrees >= 25)
                    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
                else
                    console.log("It's better to stay in home!");
            break;
            }
        }
}

summerOutfit(["28","Evening"]);

