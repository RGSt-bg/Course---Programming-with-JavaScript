function evenAndOddSubtraction(arrNumb)
{
    let sumEven = 0;
    let sumOdd = 0;

    for(let i = 0; i < arrNumb.length; i++)
        if (Number(arrNumb[i]) % 2 == 0) sumEven += Number(arrNumb[i]);
        else sumOdd += Number(arrNumb[i]);
        
    console.log(sumEven - sumOdd);
}

evenAndOddSubtraction([3,5,7,9]);