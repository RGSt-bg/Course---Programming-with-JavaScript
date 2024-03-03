function depositCalculator(input) {

    let depozSum = Number(input[0]);
    let srokDepoz = Number(input[1]);
    let percentage = Number(input[2]);
    let sum = depozSum + srokDepoz *((depozSum * percentage / 100) / 12);

    console.log(sum);
    
};

depositCalculator(["200 ","3 ","5.7 "]);