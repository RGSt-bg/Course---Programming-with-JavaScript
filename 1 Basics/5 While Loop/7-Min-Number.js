function minNumber(input)
{
    let numb = input[0];
    if (numb !=  "Stop") numb = Number(numb);
    let numbMin = numb;
    let i = 1;

    while (numb != "Stop")
    {
        if (numb < numbMin) numbMin = numb;
        numb = input[i];
        i++;
        if (numb !=  "Stop") numb = Number(numb);
    }

    console.log(numbMin);

}

minNumber(["-1","-2","Stop"]);