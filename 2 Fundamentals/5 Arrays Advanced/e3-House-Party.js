function houseParty(guestArr) {

    let guestList = [];
    let guestData = "";

    for (const name of guestArr) {
        guestData = name.split(" ");
        let guestName = guestData[0];

        if (guestData.includes("not")){

            if (guestList.includes(guestName)) {
                let nameInd = guestList.indexOf(guestName);

                if (nameInd !== -1) guestList.splice(nameInd, 1);
            }
            else console.log(`${guestName} is not in the list!`);
        }
        else if (guestList.includes(guestName)) console.log(`${guestName} is already in the list!`);
             else guestList.push(guestName);
    }

    return guestList.forEach(guestName => console.log(guestName));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);