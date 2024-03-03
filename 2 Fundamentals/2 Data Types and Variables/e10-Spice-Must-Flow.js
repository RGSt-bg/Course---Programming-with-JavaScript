function spiceMustFlow(startingYield)
{
	let days = 0;
	let spiceWarehouse = 0;

	while (startingYield >= 100)
	{
		spiceWarehouse += startingYield;
		days++;
		spiceWarehouse -= 26;
		startingYield -= 10;
		if (startingYield < 100)
		{
			spiceWarehouse -= 26;
			break;
		}
	}
	console.log(days);
	console.log(spiceWarehouse);
}

spiceMustFlow(450);