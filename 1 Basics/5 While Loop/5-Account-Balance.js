function accountBalance(input)
{
    let sum = input[0];
    if (sum !=  "NoMoreMoney") sum = Number(sum);
    let sumAll = 0.00;
    let i = 0;

    while (sum != "NoMoreMoney")
    {
        if (sum < 0)
        {
            console.log("Invalid operation!");
            console.log(`Total: ${sumAll.toFixed(2)}`);
            return;
        }
        sumAll = sumAll + sum;
        console.log(`Increase: ${sum.toFixed(2)}`);
        i++;
        sum = input[i];
        if (sum !=  "NoMoreMoney") sum = Number(sum);
    }

    console.log(`Total: ${sumAll.toFixed(2)}`);

}

accountBalance(["120","45.55","-150"]);