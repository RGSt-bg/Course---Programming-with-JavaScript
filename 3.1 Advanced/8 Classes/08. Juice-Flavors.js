function juiceFlavors(inputArr) {

    let storeBottles = new Map();
    let storeQuantity = new Map();

    inputArr.forEach(juice => {
        let [juiceType, juiceQuantity] = juice.split(" => ");
        juiceQuantity = Number(juiceQuantity);
        let juiceBtl = 0;
        let juiceQt = 0;

        if (!storeQuantity.has(juiceType)) storeQuantity.set(juiceType, 0);

        juiceQt = storeQuantity.get(juiceType);
        if (juiceQuantity + juiceQt >= 1000) {
            juiceBtl = (juiceQuantity + juiceQt - ((juiceQuantity + juiceQt) % 1000)) / 1000;

            juiceQt = juiceQuantity + juiceQt - juiceBtl * 1000;
            storeQuantity.set(juiceType, juiceQt);

            if (!storeBottles.has(juiceType)) storeBottles.set(juiceType, 0);
            juiceQt = storeBottles.get(juiceType);
            juiceQt += juiceBtl;
            storeBottles.set(juiceType, juiceQt);

        }
        else storeQuantity.set(juiceType, storeQuantity.get(juiceType) + juiceQuantity);
    });
    
    for (let elem of storeBottles) 
        console.log(`${elem[0]} => ${elem[1]}`);
}

juiceFlavors(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
console.log("------------------------");
juiceFlavors(['Kiwi => 234','Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);