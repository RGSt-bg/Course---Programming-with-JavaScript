function theatrePromotions(day, age)
{
    let price = 0;
    switch(day)
    {
        case "Weekday":
            {
                if (age >= 0 && age <= 18 || age > 64 && age <= 122) price = 12;
                else if (age > 18 && age <= 64) price = 18;
                else price = "Error!";
                break;
            }
            case "Weekend":
                {
                if (age >= 0 && age <= 18 || age > 64 && age <= 122) price = 15;
                else if (age > 18 && age <= 64) price = 20;
                else price = "Error!";
                break;
                }
        case "Holiday":
            {
                if (age >= 0 && age <= 18) price = 5;
                else if (age > 64 && age <= 122) price = 10;
                else if (age > 18 && age <= 64) price = 12;
                else price = "Error!";
                break;
            }
        }
    if (price == "Error!") console.log(price);
    else console.log(`${price}$`);
}

theatrePromotions('Holiday', 15);