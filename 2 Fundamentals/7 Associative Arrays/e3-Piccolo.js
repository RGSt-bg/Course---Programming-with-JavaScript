function piccolo(inputArr) {

    let parking = new Set();

    inputArr.forEach(element => {
        
        let [direction, carNumb] = element.split(", ");
        if (direction === "IN") parking.add(carNumb);
        else if (direction === "OUT") parking.delete(carNumb);
    });

    if (parking.size === 0) console.log("Parking Lot is Empty");
    else {
        let sortedCars = Array.from(parking).sort((a, b) => a.localeCompare(b));
        console.log(sortedCars.join("\n"));
    }
}

piccolo(['IN, CA2844AA','IN, CA1234TA','OUT, CA2844AA','IN, CA9999TT','IN, CA2866HI',
         'OUT, CA1234TA','IN, CA2844AA','OUT, CA2866HI','IN, CA9876HH','IN, CA2822UU']);
console.log("------------------------------------");
piccolo(['IN, CA2844AA','IN, CA1234TA','OUT, CA2844AA','OUT, CA1234TA']);