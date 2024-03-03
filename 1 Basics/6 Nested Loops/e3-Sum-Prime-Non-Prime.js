function sumPrimeNonPrime(input)
{
    let arrLength = input.length;
    let numb = "";
    let primeSum = 0;
    let nonPrimeSum = 0;
    let flag = 0;

    for (let i = 0; i < arrLength; i++)
    {
        if (Number(input[i]) >= 0 || Number(input[i]) < 0) numb = Number(input[i]);
        else numb = input[i];

        if (numb != "stop")
        {
            if (numb < 0) console.log("Number is negative.");
            else
            {
                if (numb == 0 || numb == 1) nonPrimeSum = nonPrimeSum + numb;
                for (let j = 2; j <= numb / 2; ++j)
                {   // if numb is divisible by i, then numb is not prime
                    // change flag to 1 for non-prime number
                    if (numb % j == 0) flag = 1;
                }
                if (flag == 1) nonPrimeSum = nonPrimeSum + numb;
                else primeSum = primeSum + numb;
                flag = 0;
            }
        }
        else
        {
            console.log(`Sum of all prime numbers is: ${primeSum}`);
            console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
        }
    }
}

sumPrimeNonPrime(["30","83","33","-1","20","stop"]);