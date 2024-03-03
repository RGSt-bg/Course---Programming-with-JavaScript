function vacation(count, type, day)
{
	let price = 0;
	switch(type)
	{
		case "Students":
		{
			switch(day)
			{
				case "Friday":
				{
					price = price + count * 8.45;
					break;
				}
				case "Saturday":
				{
					price = price + count * 9.8;
					break;
				}
				case "Sunday":
				{
					price = price + count * 10.46;
					break;
				}
			}
			if (count >= 30) price = price * 0.85;
			break;
		}
		case "Business":
		{
			switch(day)
			{
				case "Friday":
				{
					if (count >= 100) price = price + (count - 10) * 10.9;
					else price = price + count * 10.9;
					break;
				}
				case "Saturday":
				{
					if (count >= 100) price = price + (count - 10) * 15.6;
					else price = price + count * 15.6;
					break;
				}
				case "Sunday":
				{
					if (count >= 100) price = price + (count - 10) * 16;
					else price = price + count * 16;
					break;
				}
			}
			break;
		}
		case "Regular":
		{
			switch(day)
			{
				case "Friday":
				{
					price = price + count * 15;
					break;
				}
				case "Saturday":
				{
					price = price + count * 20;
					break;
				}
				case "Sunday":
				{
					price = price + count * 22.5;
					break;
				}
			}
			if (count >= 10 && count <=20) price = price * 0.95;
			break;
		}
	}
	console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30,"Students","Sunday");