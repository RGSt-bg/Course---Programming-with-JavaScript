function primeNumberChecker(numb)
{
	for (i = 2; i <= numb; i++)
	{
		if (numb % i == 0 && numb != i)
		{
			console.log("false");
			break;
		}
		else
		{
			console.log("true");
			break;
		}
	}
}

primeNumberChecker(81);