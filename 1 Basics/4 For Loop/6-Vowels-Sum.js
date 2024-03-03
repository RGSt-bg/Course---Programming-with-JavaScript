function vowelsSum(input)
{
	let word = input[0];
	let sum = 0;	

	for (let i = 0; i <= word.length; i++)
		{
		let letter = word[i];
		if (letter == "a") sum = sum + 1;
		if (letter == "e") sum = sum + 2;
		if (letter == "i") sum = sum + 3;
		if (letter == "o") sum = sum + 4;
		if (letter == "u") sum = sum + 5;
		}
	console.log(sum);
}

vowelsSum(["beer"]);