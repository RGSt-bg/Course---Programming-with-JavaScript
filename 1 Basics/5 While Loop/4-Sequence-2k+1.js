function sequence2kPlus1(input)
{
    let numb = Number(input[0]);
    let i = 1;

    while (i <= numb)
    {
        console.log(i);
        i = i * 2 + 1;
    }
}

sequence2kPlus1(["31"]);