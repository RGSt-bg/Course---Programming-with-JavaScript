// function binaryToDecimal(binary)
// {
//     let decimal = 0;
//     let newBinary = binary.toString();

//     for (let i = 0; i <= 7; i++) decimal += Number(newBinary.charAt(i)) * Math.pow(2, 7-i);
//     console.log(decimal);
// }

function binaryToDecimal(binary)
{
    let decimal = 0;
    let power = 0;

    for (let i = binary.length - 1; i >= 0; i--)
    {
        let temp = Math.pow(2, power);
        decimal += binary[i] * temp;
        power++;
    }
    console.log(decimal);
}

binaryToDecimal(00001001);