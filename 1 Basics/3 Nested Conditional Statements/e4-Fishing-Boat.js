function fishingBoat(input)
{

	let budget = Number(input[0]);
	let season = input[1]; //"Spring", "Summer", "Autumn", "Winter"
	let fishersCount = Number(input[2]);
	let price = 0.00;

	switch (season)
	{
		case "Spring":
		{
		price = 3000;
		}
		break;
		case "Summer":
		case "Autumn":
		{
		price = 4200;
		}
		break;
		case "Winter":
		{
		price = 2600;
		}
		break;
		default : console.log("There is no such season.");
		break;
	}
	if (fishersCount > 0 && fishersCount <= 6) price = price * 0.9;
	else if (fishersCount >= 7 && fishersCount <= 11) price = price * 0.85;
	else if (fishersCount >= 12) price = price * 0.75;
	else console.log("There is no people for fishing.");

	if ((fishersCount % 2) == 0 && (season == "Spring" || season == "Summer" || season == "Winter")) price = price * 0.95;

	if (budget >= price)
	{
	price = Math.abs(budget - price);
	console.log(`Yes! You have ${price.toFixed(2)} leva left.`);
	}
	else
	{
	price = Math.abs(budget - price);
	console.log(`Not enough money! You need ${price.toFixed(2)} leva.`);
	}
}

fishingBoat(["2000","Winter","13"]);