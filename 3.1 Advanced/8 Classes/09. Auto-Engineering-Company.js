function autoEngineeringCompany(inputArr) {

    let brandMap = new Map();

    inputArr.forEach(element => {
        let [brand, model, count] = element.split(" | ");
        count = Number(count);
        if (!brandMap.has(brand)) brandMap.set(brand, new Map());
        if (!brandMap.get(brand).has(model)) brandMap.get(brand).set(model, 0);

        let storedProduction = brandMap.get(brand).get(model);
        brandMap.get(brand).set(model, storedProduction + count);
    });

    for (let [brand, models] of brandMap) {
        console.log(brand);
        for (let [model, count] of models) {
            console.log(`###${model} -> ${count}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000', 'Audi | Q6 | 100', 'BMW | X5 | 1000', 'BMW | X6 | 100',
                        'Citroen | C4 | 123', 'Volga | GAZ-24 | 1000000', 'Lada | Niva | 1000000',
                        'Lada | Jigula | 1000000', 'Citroen | C4 | 22', 'Citroen | C5 | 10']);