function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let num = Number(input[2]);

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch(fruit) {
            case "banana" : console.log((num * 2.5).toFixed(2));
            break;
            case "apple" : console.log((num * 1.2).toFixed(2));
            break;
            case "orange" : console.log((num * 0.85).toFixed(2));
            break;
            case "grapefruit" : console.log((num * 1.45).toFixed(2));
            break;
            case "kiwi" : console.log((num * 2.7).toFixed(2));
            break;
            case "pineapple" : console.log((num * 5.5).toFixed(2));
            break;
            case "grapes" : console.log((num * 3.85).toFixed(2));
            break;
            default : console.log("error");
            break;
        }}
    else if (day == "Saturday" || day == "Sunday"){
        switch(fruit) {
            case "banana" : console.log((num * 2.7).toFixed(2));
            break;
            case "apple" : console.log((num * 1.25).toFixed(2));
            break;
            case "orange" : console.log((num * 0.9).toFixed(2));
            break;
            case "grapefruit" : console.log((num * 1.6).toFixed(2));
            break;
            case "kiwi" : console.log((num * 3).toFixed(2));
            break;
            case "pineapple" : console.log((num * 5.6).toFixed(2));
            break;
            case "grapes" : console.log((num * 4.2).toFixed(2));
            break;
            default : console.log("error");
            break;
         }
    }
    else console.log("error");

}

fruitShop(["tomato","Mondayy","0.5"]);