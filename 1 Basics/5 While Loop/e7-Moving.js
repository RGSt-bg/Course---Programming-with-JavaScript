function moving(input)
{
	let volumeAll = Number(input[0]) * Number(input[1]) * Number(input[2]);
	let i = 3;
	let boxes = Number(input[i]);
	let boxesAll = 0;
	
	while (boxesAll < volumeAll && boxes != "Done")
	{
		boxesAll = boxesAll + boxes;
        	i = i + 1;

        	if (Number(input[i]) >= 0) boxes = Number(input[i]);
        	else boxes = input[i];
	}

	if (boxesAll >= volumeAll)
	{
		boxesAll = boxesAll - volumeAll;
		console.log(`No more free space! You need ${boxesAll} Cubic meters more.`);
	}
    	else
    	{
		boxesAll = volumeAll - boxesAll;
        	console.log(`${boxesAll} Cubic meters left.`);
    	}
	
}

moving(["10","1","2","4", "6","Done"]);