function sumDigits(numb)
{
	let sum = 0;
	let numbAsStr = numb.toString();

	for (let i = 0; i < numbAsStr.length; i++) sum += Number(numbAsStr[i]);

	console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);