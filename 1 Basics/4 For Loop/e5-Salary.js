function salary(input)
{
    let tabs = Number(input[0]);
    let salary1 = Number(input[1]);
    let siteName = "";

    for (let i = 1; i <= tabs; i++)
    {
        siteName = input[i+1];
        if (siteName == "Facebook") salary1 = salary1 - 150;
        else if (siteName == "Instagram") salary1 = salary1 - 100;
        else if (siteName == "Reddit") salary1 = salary1 - 50;
        else salary1 = salary1;

        if (salary1 <= 0)
        {
            console.log("You have lost your salary.");
            return;
        }
    }

    if (salary1 > 0) console.log(salary1);
}

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);