function building(input)
{
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let roomStr = "";
    let letter = "";

    for (let j = floors; j > 0; j--)
    {
        if (floors == 1 || j == floors) letter = "L";
        else if (j % 2 == 0) letter = "O";
        else letter = "A";

        for (let i = 0; i <= rooms-1; i++)
            if (i == rooms-1) roomStr = roomStr + letter + j + i;
            else roomStr = roomStr + letter + j + i + " ";
        console.log(roomStr);
        roomStr = "";
    }

}

building(["4", "4"]);