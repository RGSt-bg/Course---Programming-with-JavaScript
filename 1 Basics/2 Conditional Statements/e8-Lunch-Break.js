function lunchBreak(input) {

    let serialName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let remainingTime = breakTime - lunchTime - restTime;

    if (remainingTime >= episodeTime)
        {remainingTime = Math.ceil(remainingTime - episodeTime);
         console.log(`You have enough time to watch ${serialName} and left with ${remainingTime} minutes free time.`);}
    else {remainingTime = Math.ceil(Math.abs(remainingTime - episodeTime));
         console.log(`You don't have enough time to watch ${serialName}, you need ${remainingTime} more minutes.`);}
}

lunchBreak(["Teen Wolf","48","60"]);