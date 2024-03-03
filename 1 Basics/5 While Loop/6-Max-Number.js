function maxNumber(input)
{
    let numb = input[0];
    if (numb !=  "Stop") numb = Number(numb);
    let numbMax = numb;
    let i = 1;

    while (numb != "Stop")
    {
        if (numb > numbMax) numbMax = numb;
        numb = input[i];
        i++;
        if (numb !=  "Stop") numb = Number(numb);
    }

    console.log(numbMax);

}

maxNumber(["-1","-2","Stop"]);