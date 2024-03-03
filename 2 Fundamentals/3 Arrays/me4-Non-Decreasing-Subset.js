function nonDecreasingSubset(arrNumb) {

    let newArr = [];
    newArr.push(arrNumb[0]);
    let maxNumb = arrNumb[0];

    for (let i = 0; i < arrNumb.length-1; i++)
        if (arrNumb[i+1] >= maxNumb)
        {
            newArr.push(arrNumb[i+1]);
            maxNumb = arrNumb[i+1];
        }

    console.log(newArr.join(" "));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);