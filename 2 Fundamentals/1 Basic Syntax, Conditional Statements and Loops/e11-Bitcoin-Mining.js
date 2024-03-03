function bitcoinMining(input)
{
    let count = 0;
    let day = 0;
    let sum = 0;
    let flag = 0;
    let flag1 = 0;

    for (let i = 1; i <= input.length; i++)
    {
        if (i % 3 == 0) sum = sum + (Number(input[i-1]) * 67.51) * 0.7;
        else sum = sum + Number(input[i-1]) * 67.51;
        if (sum >= 11949.16)
        {
            while (sum >= 11949.16)
            {
                count++;
                sum = sum - 11949.16;
            }
            flag = 1;
        }
        if (flag == 1 && flag1 == 0)
        {
            day = i;
            flag1 = 1;
        }
    }
    console.log(`Bought bitcoins: ${count}`);
    if (flag == 1) console.log(`Day of the first purchased bitcoin: ${day}`);
    console.log(`Left money: ${sum.toFixed(2)} lv.`)

}

bitcoinMining([3124.15,504.212,2511.124]);