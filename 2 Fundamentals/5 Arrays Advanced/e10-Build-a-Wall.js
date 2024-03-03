function buildAWall(inputArr) {

    let digAllComplete = 0;
    let arrAllComplete = [];
    let concretePerDay = 0;
    let allConcrete = [];

    for (let i = 0; i < inputArr.length; i++) arrAllComplete.push(0);
    
    while (digAllComplete < inputArr.length) {

        digAllComplete = 0;

        for (let i = 0; i < inputArr.length; i++) {

            if (inputArr[i] < 30) {
                concretePerDay += 195;
                inputArr[i] += 1;
            }
            if (inputArr[i] >= 30) arrAllComplete[i] = 1;
        }
        allConcrete.push(concretePerDay);
        concretePerDay = 0;
        for (let i = 0; i < arrAllComplete.length; i++) digAllComplete += arrAllComplete[i];

    }
    for (let i = 0; i < allConcrete.length; i++) concretePerDay += allConcrete[i];
    console.log(allConcrete.join(", "));
    console.log(`${concretePerDay * 1900} pesos`);
}

buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);