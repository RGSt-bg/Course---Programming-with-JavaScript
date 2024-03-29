function arrayManipulations(inputArr) {

    let arrNumbs = inputArr.shift().split(" ");
    arrNumbs = arrNumbs.map(Number);

	for (i = 0; i < inputArr.length; i++) {

		let [action, numb1, numb2] = inputArr[i].split(' ');
		numb1 = Number(numb1);
		numb2 = Number(numb2);
	
		switch (action) {
			case "Add" : {
				add(numb1);
				break;
			}
			case "Remove" : {
				remove(numb1);
				break;
			}
			case "RemoveAt" : {
				removeAt(numb1);
				break;
			}
			case "Insert" : {
				insert(numb2, numb1);
				break;
			}
		}
	}

	function add(numb1) {
		return arrNumbs.push(numb1);
	}

	function remove(numb1) {
		return arrNumbs = arrNumbs.filter(elem => elem !== numb1);
		//while (arrNumbs.indexOf(numb1, 0) !== -1) {
		//	let tmpInd = arrNumbs.indexOf(numb1, 0);
		//	arrNumbs.splice(tmpInd, 1, numb1);
		//}
		//return;
	}

	function removeAt(numb1) {
		return arrNumbs.splice(numb1, 1);
	}

	function insert(numb2, numb1) {
		return arrNumbs.splice(numb2, 0, numb1);
	}
	return console.log(arrNumbs.join(" "));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
