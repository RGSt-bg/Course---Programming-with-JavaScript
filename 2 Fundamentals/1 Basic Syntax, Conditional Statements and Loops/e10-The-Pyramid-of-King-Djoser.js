function thePyramidOfKingDjoser(base, increment)
{
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let level = 0;

    let i = base;
    while (i >= 1)
    {
            level++;
            i = i - 2;
    }
    for (i = 1; i <= level; i++)
    {
        if (base == 1 || base == 2) gold = Math.pow((base), 2);
        else stone = stone + Math.pow((base - 2), 2);
        if (gold > 0) break;
        if (i % 5 == 0) lapisLazuli = lapisLazuli + 4 * base - 4;
        else marble = marble + 4 * base - 4;
        base = base - 2;
    }
    console.log(`Stone required: ${Math.ceil(stone*increment)}`);
    console.log(`Marble required: ${Math.ceil(marble*increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli*increment)}`);
    console.log(`Gold required: ${Math.ceil(gold*increment)}`);
    console.log(`Final pyramid height: ${Math.floor(level*increment)}`);
}

thePyramidOfKingDjoser(11, 0.75);