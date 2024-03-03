function suppliesForSchool(input) {

    let pens = Number(input[0]) * 5.8;
    let pencils = Number(input[1]) * 7.2;
    let chemicals = Number(input[2]) * 1.2;
    let sum = pens + pencils + chemicals;
    let discount = Number(input[3]) / 100;

    console.log(sum - sum * discount);
};

suppliesForSchool(["2 ","3 ","4 ","25 "]);