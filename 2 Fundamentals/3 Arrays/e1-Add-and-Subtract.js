function addAndSubtract(arrNumb)
{
	let sumOldArr = 0;
	let sumNewArr = 0;
	let newArr = [];

	for (let i = 0; i < arrNumb.length; i++)
	{
		sumOldArr += arrNumb[i];
		if (arrNumb[i] % 2 === 0) newArr.push(arrNumb[i] + i);
		else newArr.push(arrNumb[i] - i);
		sumNewArr += newArr[i];
	}
	console.log(newArr);
	console.log(sumOldArr);
	console.log(sumNewArr);
}

addAndSubtract([5, 15, 23, 56, 35]);