function pieceOfPie(inputArr, pieOne, pieTwo) {

    let beginIndex = inputArr.indexOf(pieOne, 0);
    let endIndex = inputArr.indexOf(pieTwo, 0);
    let outputArr = [];

    for (let i = beginIndex; i <= endIndex; i++) outputArr.push(inputArr[i]);
    return outputArr;
    // console.log(outputArr);
}

pieceOfPie(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],
            'Key Lime Pie','Lemon Meringue Pie');
console.log("-------------------------------------------------------------------------------");
pieceOfPie(['Apple Crisp','Mississippi Mud Pie','Pot Pie','Steak and Cheese Pie','Butter Chicken Pie',
            'Smoked Fish Pie'],'Pot Pie','Smoked Fish Pie');