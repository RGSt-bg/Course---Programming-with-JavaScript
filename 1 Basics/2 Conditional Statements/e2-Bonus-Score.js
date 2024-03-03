function bonusScore(input) {

    let points = Number(input[0]);
    let bonus1 = 0.0;
    let bonus2 = 0.0;
 
    if (points <= 100)
        {bonus1 = 5;}
    else if (points > 100 && points <=1000)
        {bonus1 = points * 0.2;}
    else {bonus1 = points * 0.1;}

    if (points % 2 == 0)
        {bonus2 = 1;}
    else if (points % 10 == 5)
        {bonus2 = 2;}

    let bonus = bonus1 + bonus2;
    points = points + bonus1 + bonus2;


    console.log(bonus);
    console.log(points);
}

bonusScore(["15875"]);