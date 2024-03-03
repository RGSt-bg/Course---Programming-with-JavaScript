function printAndSum(begin, end)
{
	let sum = 0;
	let printNumb = "";
	for (let i = begin; i <= end; i++)
	{
		sum += i;
		printNumb = printNumb + " " + i;
	}
	console.log(printNumb);
	console.log(`Sum: ${sum}`);
}

printAndSum(0, 26);