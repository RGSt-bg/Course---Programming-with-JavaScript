function numberPyramid(input)
{
    let numb = Number(input[0]);
    let pyramid = "";
    let lastNumb = 1;
    let flag = false;

    for (let i = 1; lastNumb <= numb; i++)
    {
        for (let j = 1; j <= i; j++)
        {
            if (i > numb)
            {
                flag = true;
                break;
            }

            pyramid = pyramid + lastNumb + " ";
            lastNumb = lastNumb + 1;
        }

            console.log(pyramid);
            pyramid = "";

            if (flag == true) break;
    }

}

numberPyramid(["7"]);