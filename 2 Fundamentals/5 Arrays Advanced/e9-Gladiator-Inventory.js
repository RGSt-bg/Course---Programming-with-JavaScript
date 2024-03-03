function gladiatorInventory(inputArr) {

    let inventory = inputArr.shift().split(" ");
    let j = 0;
    let [action, equipment] = inputArr[j].split(" ");

    for (let j = 0; j < inputArr.length; j++) {

        [action, equipment] = inputArr[j].split(" ");

        switch (action) {

            case "Buy": {
                if (inventory.indexOf(equipment) == -1) inventory.push(equipment);
                break;
            }
            
            case "Trash": {
                if (inventory.indexOf(equipment) > -1) inventory.splice(inventory.indexOf(equipment), 1);
                break;
            }
            
            case "Repair": {
                let tmp = "";
                if (inventory.indexOf(equipment) > -1) tmp = inventory.splice(inventory.indexOf(equipment), 1);
                inventory.push(tmp);
                break;
            }
            
            case "Upgrade": {
                let tmp = "";
                let [equip, upgrade] = equipment.split("-");
                if (inventory.indexOf(equip) > -1) tmp = equip + ":" + upgrade;
                inventory.splice(inventory.indexOf(equip)+1, 0, tmp);
                break;
            }
            
        }
    }

    return console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear','Buy Bag','Trash Shield','Repair Spear','Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V']);