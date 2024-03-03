function biggestOf3Numbers(a, b, c)
{
    let temp = 0;

    if (a < b) temp = b;
    else temp = a;
    if (b < c) temp = c;

    console.log(temp);
}

biggestOf3Numbers(43,43.2,43.1);