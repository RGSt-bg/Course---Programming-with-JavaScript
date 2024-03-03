function foodDelivery(input) {

	let chicken = Number(input[0]);
	let fish = Number(input[1]);
	let vegetables = Number(input[2]);

	let dishesSum = chicken * 10.35 + fish * 12.4 + vegetables * 8.15;
	let allSum = dishesSum + dishesSum * 0.2 + 2.5;

	console.log(allSum);

};

	foodDelivery(["2 ","4 ","3 "]);