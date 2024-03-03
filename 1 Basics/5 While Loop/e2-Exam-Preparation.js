function examPreparation(input)
{
    let badScore = Number(input[0]);
    let i = 1;
    let taskName = input[i];
    let score = Number(input[i+1]);
    let koftiRabota = 0;
    let scoreSum = 0;
    let scoreCounter = 0;

    while (koftiRabota < badScore && taskName !== "Enough")
    {
        if (score <= 4) koftiRabota = koftiRabota + 1;
        
        scoreSum = scoreSum + score;
        i = i + 2;
	    scoreCounter = scoreCounter + 1;
        taskName = input[i];
        score = Number(input[i+1]);

    }

    if (koftiRabota == badScore) console.log(`You need a break, ${koftiRabota} poor grades.`);
    else 
    {
        scoreSum = scoreSum / scoreCounter;
        console.log(`Average score: ${scoreSum.toFixed(2)}`);
        console.log(`Number of problems: ${scoreCounter}`);
        console.log(`Last problem: ${input[i-2]}`);
    }
	
}

examPreparation(["2","Income","3","Game Info","6","Best Player","4"]);