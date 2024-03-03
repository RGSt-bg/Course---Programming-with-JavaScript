function coins(input)
{
	let sum = Number(input[0]);
	let coinsCount = 0;

	while (sum >= 2)
	{
		sum = (sum - 2).toFixed(2);
		coinsCount = coinsCount + 1;
	}
	
	while (sum >= 1)
	{
		sum = (sum - 1).toFixed(2);
		coinsCount = coinsCount + 1;
	}
	
	while (sum >= 0.5)
	{
		sum = (sum - 0.5).toFixed(2);
		coinsCount = coinsCount + 1;
	}
	
	while (sum >= 0.2)
	{
		sum = (sum - 0.2).toFixed(2);
		coinsCount = coinsCount + 1;
	}
	
	while (sum >= 0.1)
	{
		sum = (sum - 0.1).toFixed(2);
		coinsCount = coinsCount + 1;
	}
	
	while (sum >= 0.05)
	{
		sum = (sum - 0.05).toFixed(2);
		coinsCount = coinsCount + 1;
	}
	
	while (sum >= 0.02)
	{
		sum = (sum - 0.02).toFixed(2);
		coinsCount = coinsCount + 1;
	}
	
	while (sum >= 0.01)
	{
		sum = (sum - 0.01).toFixed(2);
		coinsCount = coinsCount + 1;
	}
	console.log(coinsCount);
}

coins(["2.73"]);