function storage(inputArr) {

    let storageMap = new Map();

    for (const prod of inputArr) {
        let [product, quantity] = prod.split(" ");
        quantity = Number(quantity);

        // if (storageMap.has(product)) storageMap.set(product, +quantity); //По-елегантно и лесно решение - взето от заданието.
        if (storageMap.has(product)) storageMap.set(product, storageMap.get(product) + quantity);
        else storageMap.set(product, quantity);
    }

    let storagePrint = Array.from(storageMap.entries());

    storagePrint.forEach(element => {
        console.log(`${element.join(" -> ")}`);
    });

    // for (const element of storageMap) { //Работи и с for-of, без да се конвертира към масив.
    //     console.log(`${element[0]} -> ${element[1]}`);
    // }
}

storage(['tomatoes 10','coffee 5','olives 100','coffee 40']);
console.log("---------------------");
storage(['apple 50','apple 61','coffee 115','coffee 40']);