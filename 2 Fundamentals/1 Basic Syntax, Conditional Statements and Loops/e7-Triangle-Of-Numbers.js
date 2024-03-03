function triangleOfNumbers(n)
{
	let printNumb = "";
	for (let i = 1; i <= n; i++)
	{
		for (let j = 1; j < i + 1; j++) printNumb = printNumb + " " + i;
		console.log(printNumb);
		printNumb = "";
	}
}

triangleOfNumbers(7);