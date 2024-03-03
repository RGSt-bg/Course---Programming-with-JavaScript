function tseamAccount(currentArr) {

    let gamesArr = [];
    let i = 0;
    let firstSymbol = 0;
    let str = "";
    let index = 0;
    let indexExp = 0;
    let command = "";
    let game = "";

    str = currentArr[0] + " ";

    while (index < str.length-1) {
        index = str.search(" ");
        gamesArr[i] = str.slice(firstSymbol, index);
        str = str.replace(" ", "-");
        firstSymbol = index + 1;
        i++;
    }

    firstSymbol = 0;
    for (i = 1; i < currentArr.length; i++) {
        str = currentArr[i];
        index = str.search(" ");
        command = str.slice(firstSymbol, index);
        firstSymbol = index + 1;
        game = str.slice(firstSymbol, str.length);
        firstSymbol = 0;

        index = gamesArr.indexOf(game);

        switch (command){

            case "Install" :
            {
                if (index == -1) gamesArr.push(game);
                break;
            }
            case "Uninstall" :
            {
                if (index !== -1) gamesArr.splice(index, 1);
                break;
            }
            case "Update" :
            {
                if (index !== -1) {
                    gamesArr.push(game);
                    gamesArr.splice(index, 1);
                }
                break;
            }
            case "Expansion" :
            {
                indexExp = game.search("-");
                str = game.slice(0, indexExp);
                index = gamesArr.indexOf(str);
                if (index !== -1) {
                    game = game.replace("-", ":");
                    gamesArr.splice(index+1, 0, game);
                }
                break;
            }
            default :
            {
                console.log(gamesArr.join(" "));
                break;
            }
        }
    }

}

tseamAccount(['CS WoW Diablo','Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!']);
console.log("--------------------------------------");
tseamAccount(['CS WoW Diablo','Uninstall XCOM','Update PeshoGame','Update WoW','Expansion Civ-V','Play!']);