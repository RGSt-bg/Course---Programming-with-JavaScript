function tennisRanklist(input)
{
    let tournaments = Number(input[0]);
    let scores = Number(input[1]);
    let scoresTourn = 0;
    let winCounter = 0;

    for (let i = 2; i <= tournaments + 2; i++)
    {
        let level = input[i];
        switch (level)
        {
            case "W":
                {
                    scores = scores + 2000;
                    scoresTourn = scoresTourn + 2000;
                    winCounter = winCounter + 1;
                }
            break;
            case "F":
                {
                    scores = scores + 1200;
                    scoresTourn = scoresTourn + 1200;
                }
            break;
            case "SF":
                {
                    scores = scores + 720;
                    scoresTourn = scoresTourn + 720;
                }
            break;
            }
    }

    scoresTourn = Math.floor(scoresTourn / tournaments);
    winCounter = (winCounter / tournaments * 100).toFixed(2);
    console.log(`Final points: ${scores}`);
    console.log(`Average points: ${scoresTourn}`);
    console.log(`${winCounter}%`);

}

tennisRanklist(["4","750","SF","W","SF","W"]);