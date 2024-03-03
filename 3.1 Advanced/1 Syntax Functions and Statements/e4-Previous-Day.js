function previousDay(inpYear, inpMonth, inpDay) {

    let dateToPrint = ((new Date(inpYear, inpMonth-1, inpDay-1)).toISOString()).substring(0, 10);

    if (dateToPrint[5] == "0") dateToPrint = dateToPrint.substring(0, 5) + dateToPrint.substring(6, );
    if (dateToPrint[dateToPrint.length - 2] == "0") dateToPrint = dateToPrint.substring(dateToPrint.length - 2, dateToPrint - 3) + dateToPrint.substring(dateToPrint.length - 1, );

    console.log(dateToPrint);
}

previousDay(2016, 9, 30);
console.log("------------");
previousDay(2015, 5, 10);