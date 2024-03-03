function oddAndEvenSum(num) {

    let evenSum = 0;
    let oddSum = 0;
    let str = num.toString();

    for (let i = 0; i < str.length; i++) {
        
        if (str[i] % 2 == 0) evenSum += Number(str[i]);
        else oddSum += Number(str[i]);
    }

    return console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);