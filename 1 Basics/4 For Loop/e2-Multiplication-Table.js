function multiplicationTable(input)
{
    let numb = Number(input[0]);

    for (let i = 1; i <= 10; i++)
    {
        let res = i * numb;
        console.log(`${i} * ${numb} = ${res}`);
    }

}

multiplicationTable(["9"]);