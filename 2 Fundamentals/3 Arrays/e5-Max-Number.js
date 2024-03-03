function maxNumber(arrNumb)
{
	let newArr = [];
	
	for (let i = 1; i <= arrNumb.length; i++)
	{
		let flag = 1;
		let currentNumb = Number(arrNumb[i-1]);
        for (let j = i; j < arrNumb.length; j++)
        {
			let nextNumb = Number(arrNumb[j]);
			if (nextNumb >= currentNumb)
            {
                flag = 0;
                break;
            }
		}	
		if (flag == 1) newArr.push(currentNumb);
	}
	console.log(newArr.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);