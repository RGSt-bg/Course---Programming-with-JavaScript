function vacation(input)
{
	let moneyVacation = Number(input[0]);
	let moneyReal = Number(input[1]);
	let i = 2;
	let status = input[i];
	let moneySpSa = Number(input[i+1]);
	let daysSpend = 0;
	let daysAll = 0;
	let flag = false;
	
while (moneyVacation > moneyReal && daysSpend < 5)
{
	if (status == "spend")
	{
		moneyReal = moneyReal - moneySpSa;
		if (moneyReal < 0) moneyReal = 0;
		daysSpend = daysSpend + 1;
		flag = true;
	}
	else
	{
	moneyReal = moneyReal + moneySpSa;
	flag = false;
    daysSpend = 0;
	}

	daysAll = daysAll + 1;
    i = i + 2;

    status = input[i];
	moneySpSa = Number(input[i+1]);

	if (daysSpend >= 5 && flag == true)
	{
		console.log("You can't save the money.");
		console.log(daysAll);
	}

	if (moneyVacation <= moneyReal) console.log(`You saved the money for ${daysAll} days.`);
}
}

vacation(["250","150","save","50","spend","50","save","100","spend","100","spend","50","spend","50"]);