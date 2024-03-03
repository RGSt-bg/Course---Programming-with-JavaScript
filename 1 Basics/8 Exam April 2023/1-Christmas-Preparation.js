function christmasPreparation(Input)
{
    let paper = Number(Input[0]); //5.80
    let cloth = Number(Input[1]); //7.20
    let glue = Number(Input[2]); //1.20
    let discount = Number(Input[3]);
    let sum = 0;

    sum = (paper * 5.8 + cloth * 7.2 + glue * 1.2) * (1 - discount / 100);
    console.log(sum.toFixed(3));

}

christmasPreparation(["7","8","0.5","45"]);