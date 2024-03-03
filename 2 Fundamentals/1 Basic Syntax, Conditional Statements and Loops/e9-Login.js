function login(input)
{
	let userName = input[0];
	let word = "";
	let wordReverse = "";
	let arrLength = input.length;

	for (let i = 1; i < arrLength; i++)
	{
		word = input[i];
		for (let j = word.length-1; j >= 0; j--) wordReverse = wordReverse + word.charAt(j);
		if (wordReverse == userName) console.log(`User ${userName} logged in.`)
		else if (i >= 4)
		{
			console.log(`User ${userName} blocked!`);
			break;
		}
		else console.log("Incorrect password. Try again.");
        wordReverse = "";
	}
}

login(['Acer','login','go','letme in','recA']);