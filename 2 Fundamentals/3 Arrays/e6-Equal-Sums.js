function equalSums(arrNumb)
{
	let leftSum = 0;
	let rightSum = 0;
	let flag = false;

	for (let i = 0; i < arrNumb.length; i++)
	{
		for (let j = 0; j < arrNumb.length; j++)
		{
			if (j !== i)
			{
				let numb = Number(arrNumb[j]);
				if (j < i) leftSum += numb;
				else if(j > i) rightSum += numb;

			}
		if (i === 0) leftSum = 0;
		else if (i === arrNumb.length-1) rightSum = 0;
		}

		if (leftSum === rightSum)
		{
			console.log(i);
			flag = true;
		}
		else
		{
			leftSum = 0;
			rightSum = 0;
		}
	}
	if (flag == false) console.log("no");
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);