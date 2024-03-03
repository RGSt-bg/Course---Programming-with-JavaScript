function condenseArrayToNumber(arrNumb)
{
    let arrTmp = [];

    while (arrNumb.length > 1)
    {
        for (let i = 0; i < arrNumb.length-1; i++)
        {
            arrTmp[i] = arrNumb[i] + arrNumb[i+1]
        }
        arrNumb = arrTmp;
        arrTmp = [];
    }
    console.log(arrNumb[0]);
}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);