function bestPlayer(input)
{
    let player = "";
    let goals = 0;
    let bestPlayer = "";
    let mostGoals = 0;
    let arrLength = input.length;

    for (let i = 0; i < arrLength; i = i +2)
    {
        if (input[i] == "END") break;
        else
        {
            player = input[i];
            goals = Number(input[i+1]);

            if (goals > mostGoals)
            {
                mostGoals = goals;
                bestPlayer = player;
            }
        }
        if (goals >= 10) break;
    }
    console.log(`${bestPlayer} is the best player!`);

    if (mostGoals >= 3) console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    else console.log(`He has scored ${mostGoals} goals.`);
}

bestPlayer(["Zidane","1","Felipe","2","Johnson","4","END"]);