function cake(input)
{
	let piecesAll = Number(input[0]) * Number(input[1]);
	let i = 2;
	let piecesEat = Number(input[i]);
	let pieces = 0;

	while (pieces < piecesAll && piecesEat != "STOP")
	{
		pieces = pieces + piecesEat;
        	i = i + 1;

        	if (Number(input[i]) >= 0) piecesEat = Number(input[i]);
        	else piecesEat = input[i];
	}

	if (pieces >= piecesAll)
	{
		pieces = pieces - piecesAll;
		console.log(`No more cake left! You need ${pieces} pieces more.`);
	}
    	else
    	{
		pieces = piecesAll - pieces;
        	console.log(`${pieces} pieces are left.`);
    	}
}

cake(["10","2","2","4","6","STOP"]);
