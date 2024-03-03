function roadRadar(speed, area) {

    let speedLimit = 0;
    let speedOverLimit = 0;

    switch (area) {

        case "motorway": {
            speedLimit = 130;
            printSpeedData(speed, speedLimit)
            break;
        }
        
        case "interstate": {
            speedLimit = 90;
            printSpeedData(speed, speedLimit)
            break;
        }
        
        case "city": {
            speedLimit = 50;
            printSpeedData(speed, speedLimit)
            break;
        }
        
        case "residential": {
            speedLimit = 20;
            printSpeedData(speed, speedLimit)
            break;
        }
        
        default:
            break;
    }

    function printSpeedData(speed, speedLimit) {
        if (speed > speedLimit) {

            let status = "";
            let difference = speed - speedLimit;

            if (difference <= 20) status = "speeding";
            else if (difference > 20 && difference <= 40) status = "excessive speeding";
            else status = "reckless driving";

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        else console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}

roadRadar(40, 'city');
console.log("--------------------------------------------------------------------");
roadRadar(21, 'residential');
console.log("--------------------------------------------------------------------");
roadRadar(120, 'interstate');
console.log("--------------------------------------------------------------------");
roadRadar(200, 'motorway');