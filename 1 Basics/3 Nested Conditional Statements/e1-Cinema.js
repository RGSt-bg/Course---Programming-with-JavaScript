function cinema(input) {

    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let places = rows * columns;
    let sum = 0.00;

    if (projection == "Premiere") 
        sum = (places * 12).toFixed(2);
     else if (projection == "Normal") 
        sum = (places * 7.5).toFixed(2);
    else if (projection == "Discount") 
        sum = (places * 5).toFixed(2);
    else console.log("No such projection!");
    console.log(`${sum} leva`);
}

cinema(["Discount","12","30"]);