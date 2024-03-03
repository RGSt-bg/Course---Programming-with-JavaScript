function oscars(input)
{
    let nameActor = input[0];
    let academyPoints = Number(input[1]);
    let assessors = Number(input[2]);
    let assessorName = 0;
    let assessorPoints = 0;
    let j = 3;

    for (let i = 1; i <= assessors; i++)
    {
        assessorName = (input[j]).length;
        assessorPoints = Number(input[j+1]);
        j = j + 2;
        academyPoints = academyPoints + assessorName * assessorPoints / 2;

        if (academyPoints > 1250.5)
        {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            return;
        }
    }
    if (academyPoints <= 1250.5)
    {
        academyPoints = 1250.5 - academyPoints;
        console.log(`Sorry, ${nameActor} you need ${academyPoints.toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"]);