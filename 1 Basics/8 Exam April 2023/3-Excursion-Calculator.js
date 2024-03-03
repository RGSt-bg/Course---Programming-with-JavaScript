function excursionCalculator(Input)
{
    let people = Number(Input[0])
    let season = Input[1];
    let sum = 0;

    switch (season)
    {
        case "spring":
        {   if (people <= 5) sum = sum + people * 50;
            else sum = sum + people * 48;
            break;
        }
        case "summer":
        {   if (people <= 5) sum = sum + (people * 48.50) * 0.85;
            else sum = sum + (people * 45) * 0.85;
            break;
        }
        case "autumn":
        {   if (people <= 5) sum = sum + people * 60;
            else sum = sum + people * 49.5;
            break;
        }
        case "winter":
        {   if (people <= 5) sum = sum + (people * 86) * 1.08;
            else sum = sum + (people * 85) * 1.08;
            break;
        }
    }
    console.log(`${sum.toFixed(2)} leva.`)
}

excursionCalculator(["20","winter"]);