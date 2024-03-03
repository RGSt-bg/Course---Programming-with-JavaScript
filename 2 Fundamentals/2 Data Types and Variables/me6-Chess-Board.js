function chessBoard(numb)
{
    let color = "black";
    console.log('<div class="chessboard">');

    for (let i = 1; i <= numb; i++)
    {
        console.log('<div>');
        if (i % 2 == 0) color = "white";
        else color = "black";
        for (let j = 1; j <= numb; j++)
        {
            console.log(`<span class="${color}"></span>`);
            if (color == "black") color = "white";
            else color = "black";
        }
        console.log('</div>');
    }
    console.log('</div>');
}

chessBoard(3);