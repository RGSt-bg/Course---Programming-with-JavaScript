function magicSum(arrNumb, numb)
{
    for (let i = 0; i < arrNumb.length; i++)
        for (let j = i; j < arrNumb.length; j++)
        {
            let currentNumb = Number(arrNumb[i]);
            let nextNumb = Number(arrNumb[j + 1]);
            if (currentNumb + nextNumb === numb) console.log(`${currentNumb} ${nextNumb}`);
        }

}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);