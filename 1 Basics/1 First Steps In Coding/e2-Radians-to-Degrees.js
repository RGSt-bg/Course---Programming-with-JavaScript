function radiansToDegrees(input) {

    let radians = Number(input[0]);

    console.log(radians * 180 / Math.PI); //Math.PI = 3.1415927....
};

radiansToDegrees(["3.1416"]);