function sumOfNumbers(input)
{
	let numb = input[0] + "";
	let sum = 0;	

	for (let i = 0; i < numb.length; i++)
		{
		let digit = Number(numb[i]);
		sum = sum + digit;
		}
	console.log(`The sum of the digits is:${sum}`);

}

sumOfNumbers(["1234"]);