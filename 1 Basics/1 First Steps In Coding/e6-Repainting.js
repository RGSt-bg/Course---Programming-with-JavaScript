function repainting(input) {

	let nylon = Number(input[0]);
	let paint = Number(input[1]);
	let thinner = Number(input[2]);
	let hours = Number(input[3]);
	let bag = 0.4;

	paint = paint * 1.1;
	nylon = nylon + 2;

	let materSum = nylon * 1.5 + paint * 14.5 + thinner *5 + bag;
	let allSum = materSum + materSum * hours * 0.3;

	console.log(allSum);

};

	repainting(["10 ","11 ","4 ","8 "]);