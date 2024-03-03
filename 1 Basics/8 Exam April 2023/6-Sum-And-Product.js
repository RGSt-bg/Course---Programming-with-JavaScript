function sumAndProduct(input)
{
    let n = Number(input[0]);
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let flag = 0;

    for (a = 1; a <= 9; a++)
    {
        if (flag == 1) break;
        for (b = 9; b >= a; b--)
        {
            if (flag == 1) break;
            for (c = 0; c <= 9; c++)
            {
                if (flag == 1) break;
                for (d = 9; d >= c; d--)
                {
                    if ((a + b + c + d) == (a * b * c * d) && (n % 10) == 5)
                    {
                        console.log(`${a}${b}${c}${d}`);
                        flag = 1;
                        break;
                    }
                    else if (Math.floor((a * b * c * d) / (a + b + c + d)) == 3 && (n % 3) == 0)
                    {
                        console.log(`${d}${c}${b}${a}`);
                        flag = 1;
                        break;
                    }
                }
            }
        }
    }
    if (flag == 0) console.log("Nothing found");
}

sumAndProduct(["123"]);