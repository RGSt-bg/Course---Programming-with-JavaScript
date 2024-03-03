function oldBooks(input)
{
	let wantedBook = input[0];
	let i = 1;
	let book = input[i];

	while (book !== wantedBook || book !== "No More Books")
	{
		if (book === wantedBook)
		{
			console.log(`You checked ${i-1} books and found it.`);
			return;
		}
		else if (book === "No More Books")
		{
			console.log("The book you search is not here!");
			console.log(`You checked ${i-1} books.`);
			return;
		}
		else
		{
			i++;
			book = input[i];
		}
	}

}

oldBooks(["Troy","Stronger","Life Style","Troy"]);