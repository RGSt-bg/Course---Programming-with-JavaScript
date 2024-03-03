function sumNumbers(input)
{
    let numb = Number(input[0]);
    let sum = 0;
    let i = 1;

    while (sum < numb)
    {
        sum = sum + Number(input[i]);
        i++;
    }

    console.log(sum);
}

sumNumbers(["20","1","2","3","4","5","6"]);