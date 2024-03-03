function equalArrays(arr1, arr2)
{
    let sum = 0;
    let diff = 0;
    let flag = 0;

    for (let i = 0; i < arr1.length; i++)
    {
        if (Number(arr1[i]) === Number(arr2[i])) sum += Number(arr1[i]);
        else
        {
            diff = i;
            flag = 1;
            break;
        }
    }

    if (flag) console.log(`Arrays are not identical. Found difference at ${diff} index`);
    else console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);