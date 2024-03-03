function reverseInPlace(arrStrings)
{
	let tmpStr = "";
	let printStr = "";

	for (let i = 0; i < Math.floor(arrStrings.length/2); i++)
	{
		tmpStr = arrStrings[i];
		arrStrings[i] = arrStrings[arrStrings.length-1-i];
		arrStrings[arrStrings.length-1-i] = tmpStr;
	}

	// for (let i = 0; i < arrStrings.length; i++) printStr += arrStrings[i] + " ";

	// console.log(printStr);
	console.log(arrStrings.join(" "));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);