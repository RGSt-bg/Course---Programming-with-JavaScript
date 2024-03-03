function sumOfTwoNumbers(input)
{
    let intervalBegin = Number(input[0]);
    let intervalEnd = Number(input[1]);
    let magicNumber = Number(input[2]);
    let allComb = 0;

    for (let i = intervalBegin; i <= intervalEnd; i++)
        for (let j = intervalBegin; j <= intervalEnd; j++)
        {
            allComb = allComb + 1;
            if (i + j == magicNumber)
                {
                    console.log(`Combination N:${allComb} (${i} + ${j} = ${magicNumber})`);
                    return;
                }
        }
    console.log(`${allComb} combinations - neither equals ${magicNumber}`);
    
}

sumOfTwoNumbers(["88", "888", "2000"]);