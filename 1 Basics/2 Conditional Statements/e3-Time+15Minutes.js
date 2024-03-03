function timePlus15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    minutes = minutes + 15;
    if (minutes >= 60)
        {minutes = minutes - 60;
         hours = hours + 1;}
    if (minutes < 10)
        {minutes = "0" + minutes;}

    if (hours > 23)
        {hours = 0;}

        console.log(`${hours}:${minutes}`);
}

timePlus15Minutes(["23", "45"]);