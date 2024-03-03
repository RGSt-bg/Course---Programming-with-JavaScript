function triplesOfLatinLetters(n)
{
    let endLetter = Number(n) - 1;
    let letter = "";
    let result = "";

    for (let i = 0; i <= endLetter; i++)
        for (let j = 0; j <= endLetter; j++)
            for (let k = 0; k <= endLetter; k++)
            {
                letter += String.fromCharCode(97+i);
                letter += String.fromCharCode(97+j);
                letter += String.fromCharCode(97+k);
                console.log(letter);
                letter = "";
            }
}

triplesOfLatinLetters('2');