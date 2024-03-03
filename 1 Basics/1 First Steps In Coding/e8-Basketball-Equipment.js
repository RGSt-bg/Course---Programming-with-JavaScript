function basketballEquipment(input) {

	let fee = Number(input[0]);
	let shoes = fee * 0.6;
	let team = shoes * 0.8;
	let ball = team * 0.25;
	let accessories = ball * 0.2;
	let allSum = fee + shoes + team + ball + accessories;

	console.log(allSum);

};

	basketballEquipment(["365 "]);