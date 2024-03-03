function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let qty = Number(input[2]);

    switch (product) {
        case "coffee":
            { switch (town) {
                case "Sofia": console.log(qty * 0.5);
                break;
                case "Plovdiv": console.log(qty * 0.4);
                break;
                case "Varna": console.log(qty * 0.45);
                break;
            }}
        break;
        case "water":
            { switch (town) {
                case "Sofia": console.log(qty * 0.8);
                break;
                case "Plovdiv": console.log(qty * 0.7);
                break;
                case "Varna": console.log(qty * 0.7);
                break;
            }}
        break;
        case "beer":
            { switch (town) {
                case "Sofia": console.log(qty * 1.2);
                break;
                case "Plovdiv": console.log(qty * 1.15);
                break;
                case "Varna": console.log(qty * 1.1);
                break;
            }}
        break;
        case "sweets":
            { switch (town) {
                case "Sofia": console.log(qty * 1.45);
                break;
                case "Plovdiv": console.log(qty * 1.3);
                break;
                case "Varna": console.log(qty * 1.35);
                break;
            }}
        break;
        case "peanuts":
            { switch (town) {
                case "Sofia": console.log(qty * 1.6);
                break;
                case "Plovdiv": console.log(qty * 1.5);
                break;
                case "Varna": console.log(qty * 1.55);
                break;
            }}
        break;
        default: console.log("There is no such product/town!");
        break; }
}

smallShop(["sweets","Sofia","2.23"]);