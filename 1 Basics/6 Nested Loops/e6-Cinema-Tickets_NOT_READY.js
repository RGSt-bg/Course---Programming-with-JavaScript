function cinemaTickets(input)
{
    let movieName = "";
    let arrLength = input.length;
    let ticketType = "";
    let ticketSum = 0;
    let students = 0;
    let standards = 0;
    let kids = 0;
    let allTickets = 0;
    let freePlaces = 0;

    for (let i = 0; i < arrLength; i++)
    {
        ticketType = input[i];
        switch (ticketType)
        {
            case "student": students++;
            break;
            case "standard": standards++;
            break;
            case "kid": kids++;
            break;
            case "Finish": allTickets = allTickets + students + standards + kids;
            break;
        }
    }

    for (let i = 0; i < arrLength; i++)
    {
        ticketType = input[i];
        if (Number.isInteger(Number(input[i+1]))) freePlaces = Number(input[i+1]);
        if (ticketType != "End" && ticketType != "Finish" && ticketSum < freePlaces)
        {
            if (Number.isInteger(Number(input[i]))) freePlaces = Number(input[i]);
            else if (input[i] != "standard" && input[i] != "student" && input[i] != "kid" && input[i] != "End" && input[i] != "Finish") movieName = input[i];

            if (ticketType == "student" || ticketType == "standard" || ticketType == "kid") ticketSum++;
        }
            if (ticketType == "End" || ticketType == "Finish" || ticketSum > freePlaces)
            {
                ticketSum = ticketSum / freePlaces * 100;
                console.log(`${movieName} - ${ticketSum.toFixed(2)}% full.`);
                ticketSum = 0;
            }
    }
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${(students / allTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standards / allTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kids / allTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Shutter Island","9","standard","standard","standard","student","student","student","kid","kid","kid","Rush","9","standard","standard","standard","student","student","student","kid","kid","kid","Deadpool","9","standard","standard","standard","student","student","student","kid","kid","kid","Finish"]);