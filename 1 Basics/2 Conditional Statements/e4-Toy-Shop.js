function toyShop(input) {

    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let sum = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

    if (puzzles + dolls + bears + minions + trucks >= 50)
        {sum = sum * 0.75;}
    
    sum = sum * 0.9;

    if (excursionPrice <= sum)
        {let money = sum - excursionPrice;
         console.log(`Yes! ${money.toFixed(2)} lv left.`);}
    else {let money = excursionPrice - sum;
         console.log(`Not enough money! ${money.toFixed(2)} lv needed.`);}

}

toyShop(["320","8","2","5","5","1"]);