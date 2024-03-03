function traveling(input)
{
    let arrLength = input.length;
    let destination = input[0];
    let price = Number(input[1]);
    let sum = 0.00;
    let saveSum = 0.00;

    for (let i = 2; i <= arrLength; i++)
        if (Number(input[i]) >= 0)
        {
            sum = Number(input[i]);
            saveSum = saveSum + sum;
            if (saveSum >= price) console.log(`Going to ${destination}!`);
        }
        else
        {
            destination = input[i];
            if (destination == "End") return;
            i++;
            price = Number(input[i]);
            saveSum = 0;
        }

}

traveling(["France","2000","300","300","200","400","190","258","360","Portugal","1450","400","400","200","300","300","Egypt","1900","1000","280","300","500","End"]);