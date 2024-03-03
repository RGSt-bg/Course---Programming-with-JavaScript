function division(numb)
{
	let bigger = 0;
	let flag = 0;
	if (numb % 2 == 0) bigger = 2;
	if (numb % 3 == 0) bigger = 3;
	if (numb % 6 == 0) bigger = 6;
	if (numb % 7 == 0) bigger = 7;
	if (numb % 10 == 0) bigger = 10;

	if (bigger == 0) console.log("Not divisible");
	else console.log(`The number is divisible by ${bigger}`);
}

division(30);