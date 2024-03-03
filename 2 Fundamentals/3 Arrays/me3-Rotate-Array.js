function rotateArray(arrNumb)
{
    let rotation = Number(arrNumb[arrNumb.length-1]);
    arrNumb.pop();

	for (i = 1; i <= rotation; i++)
	{
        let lastElem = arrNumb.pop();
		arrNumb.unshift(lastElem);
	}
	console.log(arrNumb.join(" "));

}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);