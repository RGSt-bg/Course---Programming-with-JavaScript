function vacationBooksList(input) {

    let sheetsBook = Number(input[0]);
    let sheetHour = Number(input[1]);
    let days = Number(input[2]);    

    console.log(sheetsBook / sheetHour / days);


};

vacationBooksList(["432 ","15 ","4 "]);