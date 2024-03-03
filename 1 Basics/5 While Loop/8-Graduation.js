function graduation(input)
{
    let name = input[0];
    let i = 0;
    let evaluation = Number(input[i]);
    let koftiRabota = 0;
    let evaluationSum = 0.00;
    let schoolClass = 1;

    while (koftiRabota < 2 && schoolClass < 13)
    {
        i++;
        evaluation = Number(input[i]);
        if (evaluation < 4) koftiRabota = koftiRabota + 1;
        else 
        {
		    schoolClass = schoolClass + 1;
            evaluationSum = evaluationSum + evaluation;
        }
    }

    if (koftiRabota == 2) console.log(`${name} has been excluded at ${schoolClass} grade`);
    else 
    {
        evaluationSum = evaluationSum / 12;
        console.log(`${name} graduated. Average grade: ${evaluationSum.toFixed(2)}`)
    }
}

graduation(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);