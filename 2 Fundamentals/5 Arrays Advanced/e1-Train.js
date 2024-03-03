function train(inputArr) {

    let arrPassengers = inputArr.shift().split(" ");
    arrPassengers = arrPassengers.map(Number);
    let maxPassengers = Number(inputArr.shift());
    let isDigit = true;

	for (i = 0; i < inputArr.length; i++) {

		let [action, passengers] = inputArr[i].split(' ');
        if (!(action.charCodeAt(0) >= 48 && action.charCodeAt(0) <= 57)) {
            isDigit = false;
		    passengers = Number(passengers);
        }
        else passengers = Number(action);

        if (!isDigit) arrPassengers.push(passengers);
        else {
            for (j = 0; j < arrPassengers.length; j++)
                if (passengers + arrPassengers[j] <= maxPassengers) {
                    arrPassengers[j] += passengers;
                    break;
                }
        }

        isDigit = true;
    }

    return console.log(arrPassengers.join(" "));
}

// train(['32 54 21 12 4 0 23',
// '75',
// 'Add 10',
// 'Add 0',
// '30',
// '10',
// '75']);
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);