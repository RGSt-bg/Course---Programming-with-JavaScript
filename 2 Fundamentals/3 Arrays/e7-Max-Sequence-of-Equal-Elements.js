function maxSequenceOfEqualElements(arrNumb)
{
    let longSeqNumb = 0;
    let counter = 1;
    let maxCounter = 0;

    for (i = 0; i < arrNumb.length; i++)
    {
        if (i !== 0)
        {
            let firstNumb = Number(arrNumb[i - 1]);
            let nextNumb = Number(arrNumb[i]);

            if (firstNumb === nextNumb)
            {
                counter ++;

                if (counter > maxCounter)
                {
                    maxCounter = counter;
                    longSeqNumb = nextNumb;
                }
            }
            else
            {
                counter = 1;
            }
        }
    }
    console.log(`${(longSeqNumb + " ").repeat(maxCounter)}`);
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);