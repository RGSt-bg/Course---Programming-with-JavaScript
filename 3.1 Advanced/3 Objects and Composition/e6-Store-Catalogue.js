function storeCatalogue(inputArr) {

    let productObj = {};
    let productArr = [];

    for (let i = 0; i < inputArr.length; i++) {

        let [product, price] = inputArr[i].split(" : ");
        price = Number(price);
        productObj[product] = price;
    }

    productArr = Object.entries(productObj).sort();
    let letter = productArr[0][0].substring(0, 1);
    console.log(letter);
    for (let i = 0; i < productArr.length; i++) {
        if (letter !== productArr[i][0].substring(0, 1)) {
            letter = productArr[i][0].substring(0, 1);
            console.log(letter);
        }
        console.log(`  ${productArr[i].join(": ")}`);
    }

}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
                'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
console.log("---------------------------");
// storeCatalogue(['Banana : 2', 'Rubic's Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000',
//                 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']);