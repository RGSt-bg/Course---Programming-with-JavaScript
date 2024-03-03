function circleArea(inputArg) {

    if (typeof(inputArg) == "number") console.log((Math.PI * Math.pow(inputArg, 2)).toFixed(2));
    else console.log(`We can not calculate the circle area, because we receive a ${typeof(inputArg)}.`);
}

circleArea(5);
console.log("--------------------------------------------------------------------");
circleArea('name');