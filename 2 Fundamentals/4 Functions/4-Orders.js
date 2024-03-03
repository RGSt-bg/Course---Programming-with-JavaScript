function orders(product, qty) {

    switch(product) {

        case "coffee" : 
        {
            print(qty, 1.5);
            break;
        }
        case "water" : 
        {
            print(qty, 1);
            break;
        }
        case "coke" : 
        {
            print(qty, 1.4);
            break;
        }
        case "snacks" : 
        {
            print(qty, 2);
            break;
        }
        default : 
        {
            console.log("No such product!");
            break;
        }
    }

    function print(numb, price) {
        console.log((numb * price).toFixed(2));
    }
}

orders("water", 5);