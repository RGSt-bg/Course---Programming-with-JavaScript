function fishTank(input) {

	let lenght = Number(input[0]) / 10;
	let width = Number(input[1]) / 10;
	let height = Number(input[2]) / 10;
	let percentage = Number(input[3]);

	let volumeFull = lenght * width * height;
	let volumeUsable = volumeFull - (volumeFull * percentage /100);

	console.log(volumeUsable);

};

	fishTank(["85 ","75 ","47 ","17 "]);