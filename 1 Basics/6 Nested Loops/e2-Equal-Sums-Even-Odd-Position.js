function equalSumsEvenOddPosition(input)
{
	let firstNum = Number(input[0]);
	let lastNum = Number(input[1]);
	let str = "";
	let strPrint = "";
	let sumOdd = 0;
	let sumEven = 0;

	for (let i = firstNum; i <= lastNum; i++)
    {
		str = " " + i;
		sumOdd = 0;
	    sumEven = 0;
	    for (let j = 0; j <= str.length-1; j++)
		{
			if (str.charAt(j) != " ")
            {
                if (j % 2 == 0) sumEven = sumEven + Number(str.charAt(j));
			    else sumOdd = sumOdd + Number(str.charAt(j));
            }
		}
		if (sumEven == sumOdd) strPrint = strPrint + i + " ";
    }
    console.log(strPrint);
}

equalSumsEvenOddPosition(["100115","100120"]);