function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothing = Number(input[2]);

    if (people > 150)
        {clothing = clothing * 0.9;}

    if (budget >= (people * clothing + budget * 0.1))
        {let money = budget - (people * clothing + budget * 0.1);
         console.log("Action!");
         console.log(`Wingard starts filming with ${money.toFixed(2)} leva left.`);}
    else {let money = (people * clothing + budget * 0.1) - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${money.toFixed(2)} leva more.`);}
}

godzillaVsKong(["9587.88","222","55.68"]);