function englishNameOfTheLastDigit(input)
{
    let numb = "" + input;
    numb = Number(numb.charAt(numb.length-1));

    switch(numb)
    {
        case 0:
        {
            numb = "zero";
            break;
        }
        case 1:
        {
            numb = "one";
            break;
        }
        case 2:
        {
            numb = "two";
            break;
        }
        case 3:
        {
            numb = "three";
            break;
        }
        case 4:
        {
            numb = "four";
            break;
        }
        case 5:
        {
            numb = "five";
            break;
        }
        case 6:
        {
            numb = "six";
            break;
        }
        case 7:
        {
            numb = "seven";
            break;
        }
        case 8:
        {
            numb = "eight";
            break;
        }
        case 9:
        {
            numb = "nine";
            break;
        }
        default:
        {
            numb = "Error!";
            break;
        }
    }
    console.log(numb);
}

englishNameOfTheLastDigit(45678910);