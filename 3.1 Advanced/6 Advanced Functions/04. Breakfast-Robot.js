function solution() {

    let storeObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    
    let receiptsObj = {
        apple:    { carbohydrate: 1,
                    flavour: 2 },
        lemonade: { carbohydrate: 10,
                    flavour: 20 },
        burger:   { carbohydrate: 5,
                    fat: 7,
                    flavour: 3 },
        eggs:     { protein: 5,
                    fat: 1,
                    flavour: 1 },
        turkey:   { protein: 10,
                    carbohydrate: 10,
                    fat: 10,
                    flavour: 10 },
    };

    return function manager(inputStr) {
            let [command, microelement, quantity] = inputStr.split(" ");
            quantity = Number(quantity);

            switch (command) {
                case "restock": {
                    storeObj[microelement] += quantity;
                    return "Success";
                }
                case "prepare": {
                    let rejectFlag = false;
                    let storeObjCopy = JSON.parse(JSON.stringify(storeObj));
                    let receiptsArr = Object.entries(receiptsObj[microelement]);
                    for (const element of receiptsArr) {
                        let key = element[0];
                        let value = element[1];
                        if (storeObj[key] < quantity * value) {
                            rejectFlag = true;
                            return `Error: not enough ${key} in stock`;
                        }
                        if (!rejectFlag) storeObjCopy[key] -= quantity * value;
                    }
                    if (!rejectFlag) storeObj = JSON.parse(JSON.stringify(storeObjCopy));
                    return "Success";
                }
                case "report": {
                    let storeArr = [];
                    storeArr = Object.entries(storeObj);
                    let outputStr = "";
                    for (const element of storeArr) {
                        let storeObjKey = element[0];
                        let storeObjValue = element[1];
                        outputStr += `${storeObjKey}=${storeObjValue} `;
                    }
                    return outputStr.trim();
                }
            }
    };
}

let manager = solution (); 
// console.log (manager ("restock flavour 50")); // Success 
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock

///*
console.log (manager ("restock flavour 50"));
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
//*/