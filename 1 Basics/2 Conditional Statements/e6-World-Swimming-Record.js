function worldSwimmingRecord(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time1Meter = Number(input[2]);

    let time = distance * time1Meter + Math.floor(distance / 15) * 12.5;
    let timeDifference = Math.abs(time - record).toFixed(2);

    if (time >= record)
        {console.log(`No, he failed! He was ${timeDifference} seconds slower.`)}
    else {console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)}

}

worldSwimmingRecord(["10464","1500","20"]);