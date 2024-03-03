function sumSeconds(input) {

    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let allTime = time1 + time2 + time3;
    let min = Math.floor(allTime / 60);
    let sec = allTime % 60;

    if (sec < 10)
        {sec = "0" + sec;};

    //console.log(min + ":" + sec);
    console.log(`${min}:${sec}`);

}

sumSeconds(["14", "12","10"]);