function reverseAnArrayOfNumbers(numb, arrNumb)
{
	let newArr = [];
//    let printStr = "";

	for (let i = numb-1; i >= 0; i--)
	{
		newArr[numb-1-i] = arrNumb[i];
//        printStr += arrNumb[i] + " ";
	}

//    console.log(printStr);
    console.log(newArr.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);