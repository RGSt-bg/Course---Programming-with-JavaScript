function heroicInventory(inputArr) {

    let outputArr = [];
    let itemsArr = [];
    let tempObj = {};

    for (let i = 0; i < inputArr.length; i++) {

        let [name, level, item] = inputArr[i].split(" / ");
        level = Number(level);
        tempObj.name = name;
        tempObj.level = level;
        itemsArr = item ? item.split(", ") : [];
        tempObj.items = itemsArr;
        outputArr.push(tempObj);
        tempObj = {};
    }
    return JSON.stringify(outputArr);
    // console.log(JSON.stringify(outputArr));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
                 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
console.log("--------------------------------------------------------------------");
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);