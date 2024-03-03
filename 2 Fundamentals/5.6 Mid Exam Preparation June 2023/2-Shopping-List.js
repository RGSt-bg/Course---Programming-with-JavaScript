function shoppingList(inputArr) {

    let arrProducts = inputArr.shift().split("!");
    let i = 0;
    let [action, product, newProduct] = inputArr[i].split(' ');
    let tmpProd = "";

    while (action !== "Go") {
        [action, product, newProduct] = inputArr[i].split(' ');
        switch (action) {
            case "Urgent" : {
                if (!arrProducts.includes(product)) arrProducts.unshift(product);
                break;
            }
            case "Unnecessary" : {
                if (arrProducts.includes(product)) arrProducts.splice(arrProducts.indexOf(product), 1);
                break;
            }
            case "Correct" : {
                if (arrProducts.includes(product)) {
                    let index = arrProducts.indexOf(product);
                    arrProducts[index] = newProduct;
                }
                break;
            }
            case "Rearrange" : {
                if (arrProducts.includes(product)) {
                    tmpProd = arrProducts.splice(arrProducts.indexOf(product), 1);
                    arrProducts.push(tmpProd);
                }
                break;
            }
            default : break;
        }
        i++;
    }
    return console.log(arrProducts.join(", "));
}

shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes",
"Correct Pepper Onion","Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]);