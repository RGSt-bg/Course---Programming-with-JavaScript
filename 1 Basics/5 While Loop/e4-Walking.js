function walking(input)
{
	let i = 0;
    if (Number(input[i]) >= 0) steps = Number(input[i]);
    else steps = input[i];
	let stepsWalk = 0;

	while (stepsWalk < 10000 && steps != "Going home")
	{
		stepsWalk = stepsWalk + steps;
        	i = i + 1;

        	if (Number(input[i]) >= 0) steps = Number(input[i]);
        	else steps = input[i];
    	}

    	if (steps == "Going home") stepsWalk = stepsWalk + Number(input[i+1]);

	if (stepsWalk >= 10000)
	{
		console.log("Goal reached! Good job!");
		steps = stepsWalk - 10000;
		console.log(`${steps} steps over the goal!`);
	}
    	else
    	{
        	steps = 10000 - stepsWalk;
        	console.log(`${steps} more steps to reach goal.`);
    	}

}

walking(["125","250","4000","30","2678","4682"]);