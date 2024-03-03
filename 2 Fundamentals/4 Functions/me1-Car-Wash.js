function carWash(commands) {

	let carClean = 0;

	for (let i = 0; i < commands.length; i++) {
		let str = commands[i];

		switch (str) {

		case "soap" : {
			carClean += 10;
			break;
			}
		case "water" : {
			carClean *= 1.2;
			break;
			}
		case "vacuum cleaner" : {
			carClean *= 1.25;
			break;
			}
		case "mud" : {
			carClean *= 0.9;
			break;
			}
		}
	}
	return console.log(`The car is ${carClean.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);