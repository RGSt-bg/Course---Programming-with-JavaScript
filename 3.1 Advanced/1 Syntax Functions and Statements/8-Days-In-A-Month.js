function daysInAMonth(month, year) {

    'use strict'
    console.log(new Date(year, month, 0).getDate());
}

daysInAMonth(1, 2012);
console.log("-------");
daysInAMonth(2, 2021);