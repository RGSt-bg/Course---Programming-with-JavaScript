function sumEvenNumbers(arrNumb)
{
    let sum = 0;

    for (let i = 0; i < arrNumb.length; i++)
    {
        if (Number(arrNumb[i]) % 2 == 0) sum += Number(arrNumb[i]);
    }
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);