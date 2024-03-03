function searchForANumber(arrNumbs, arrCounts) {

	let newArrNumbs = [];
	let numbsGetCount = arrCounts[0];
	let numbsDelCount = arrCounts[1];
	let numbSearch = arrCounts[2];
    let numbSearchCounter = 0;

	newArrNumbs = arrNumbs.slice(0, numbsGetCount);
	newArrNumbs.splice(0, numbsDelCount);
	newArrNumbs.forEach(count, numbSearch);

	return console.log(`Number ${numbSearch} occurs ${numbSearchCounter} times.`);

	function count(numb, index, arr) {
		if (arr[index] === numbSearch) numbSearchCounter++;
		return numbSearchCounter;
	}

    // Решението на Иво Димитров с метода filter() - много елегантно!
    // let numbCounter = newArrNumbs.filter(e => e === numbSearch).length;
	// return console.log(`Number ${numbSearch} occurs ${numbCounter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);