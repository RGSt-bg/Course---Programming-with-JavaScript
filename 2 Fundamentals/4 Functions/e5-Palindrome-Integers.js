function palindromeIntegers(arrayNum) {

    let arrayReverseNum = [];
    let tmpStr = "";
    let reverseNum = "";

    for (let i = 0; i < arrayNum.length; i++) {
        tmpStr = arrayNum[i].toString();                            //преобразува N-тия елемент в стринг
        reverseNum = Number(tmpStr.split("").reverse().join(""));   //split() преобразува стринга в масив от цифри;
                                                                    //reverse() преподрежда цифрите в масива в обратен ред;
                                                                    //join() преобразува цифрите от масива в стринг;
        if (reverseNum === arrayNum[i]) console.log(true);
        else console.log(false);
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);