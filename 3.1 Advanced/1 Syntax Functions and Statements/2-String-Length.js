function stringLength(strOne, strTwo, strThree) {

    let strOneLength = strOne.length;
    let strTwoLength = strTwo.length;
    let strThreeLength = strThree.length;

    console.log(strOneLength + strTwoLength + strThreeLength);
    console.log(Math.floor((strOneLength + strTwoLength + strThreeLength) / 3));
}

stringLength('chocolate', 'ice cream', 'cake');
console.log("-------");
stringLength('pasta', '5', '22.3');