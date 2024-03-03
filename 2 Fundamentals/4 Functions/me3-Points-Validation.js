function pointsValidation(coordinates) {

    for (let i = 0; i <= 3; i += 2) {

	    let distance = 0;

	    distance = validDistance(0, 0, coordinates[i], coordinates[i+1]);
	    if (distance === Math.round(distance)) console.log(`{${coordinates[i]}, ${coordinates[i+1]}} to {0, 0} is valid`);
	    else console.log(`{${coordinates[i]}, ${coordinates[i+1]}} to {0, 0} is invalid`);

        if (i === 2) {
	    	distance = validDistance(coordinates[i-2], coordinates[i-1], coordinates[i], coordinates[i+1]);
	    	if (distance === Math.round(distance)) console.log(`{${coordinates[i-2]}, ${coordinates[i-1]}} to {${coordinates[i]}, ${coordinates[i+1]}} is valid`);
	    	else console.log(`{${coordinates[i-2]}, ${coordinates[i-1]}} to {${coordinates[i]}, ${coordinates[i+1]}} is invalid`);
	    }
    }

    function validDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);