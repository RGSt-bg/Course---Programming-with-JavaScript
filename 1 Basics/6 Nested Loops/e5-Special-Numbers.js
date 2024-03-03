function specialNumbers(input)
{
    let N = Number(input[0]);
    let str = "";
    let flag = 0;

    for (let i = 1111; i <= 9999; i++)
    {
		i = " " + i;
	    for (let j = 1; j <= 4; j++)
		{
			if (N % Number(i.charAt(j)) != 0)
            {
                flag = 0;
                break;
            }
            else flag = 1;
		}
        if (flag == 1)
        {
            str = str + Number(i) + " ";
        }
    }
    console.log(str);
}

specialNumbers(["3"]);