function lowestPricesInCities(inputArr) {

    let outputObj = {};
    let tempObj = {};

    inputArr.forEach(element => {
        let [town, product, price] = element.split(" | ");
        price = Number(price);
        
        if (!outputObj.hasOwnProperty(product)) {
            tempObj.price = price;
            tempObj.town = town;
            outputObj[product] = tempObj;
            tempObj = {};
        }
        else if (outputObj[product].price > price) {
            tempObj.price = price;
            tempObj.town = town;
            outputObj[product] = tempObj;
            tempObj = {};
        }
    });

    for (let product in outputObj) {
          
          console.log(`${product} -> ${outputObj[product].price} (${outputObj[product].town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2',
                      'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2',
                      'New York | Sample Product | 1000.1', 'New York | Burger | 10']);
console.log("----------------------------------");
lowestPricesInCities(['Sofia City | Audi | 100000', 'Sofia City | BMW | 100000',
                      'Sofia City | Mitsubishi | 10000', 'Sofia City | Mercedes | 10000',
                      'Sofia City | NoOffenseToCarLovers | 0', 'Mexico City | Audi | 1000',
                      'Mexico City | BMW | 99999', 'Mexico City | Mitsubishi | 10000',
                      'New York City | Mitsubishi | 1000', 'Washington City | Mercedes | 1000']);