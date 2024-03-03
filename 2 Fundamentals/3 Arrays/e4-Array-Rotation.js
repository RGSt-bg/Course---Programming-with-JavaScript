function arrayRotation(arrNumb, rotation)
{
	// let tmpNumb = 0;

	for (i = 1; i <= rotation; i++)
	{
		let firstElem = arrNumb.shift();
		arrNumb.push(firstElem);
		// tmpNumb = arrNumb[0];
		// for (j = 0; j < arrNumb.length-1; j++) arrNumb[j] = arrNumb[j+1];
		// arrNumb[arrNumb.length-1] = tmpNumb;
	}
	console.log(arrNumb.join(" "));

}

arrayRotation([51, 47, 32, 61, 21], 2);