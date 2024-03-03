function specialNumbers(numb)
{
	let sum = 0;
    let numbAsStr = "";
    let result = "";

    for (let i = 1; i <= numb; i++)
    {
        numbAsStr = i.toString();
        for (let j = 0; j < numbAsStr.length; j++) sum += Number(numbAsStr[j]);
        if (sum == 5 || sum == 7 || sum == 11) result = "True";
        else  result = "False";
        console.log(`${i} -> ${result}`);
        sum = 0;
    }
}

specialNumbers(20);