function arrayModifier(inputArr) {

    let arrNumbs = inputArr.shift().split(" ").map(Number);
    let numbsLength = 0;
    let i = 0;
    let [action, index1, index2] = inputArr[i].split(" ");

    while (action !== "end") {

        [action, index1, index2] = inputArr[i].split(" ");
        index1 = Number(index1);
        index2 = Number(index2);
        numbsLength = arrNumbs.length;
        let tmpNumb = 0;

        switch (action) {

            case "swap": {
                tmpNumb = arrNumbs[index1];
                arrNumbs[index1] = arrNumbs[index2];
                arrNumbs[index2] = tmpNumb;
                i++;
                break;
            }

            case "multiply": {
                arrNumbs[index1] *= arrNumbs[index2];
                i++;
                break;
            }

            case "decrease": {
                arrNumbs = arrNumbs.map(x => x - 1);
                i++;
                break;
            }
        }
    }
    return console.log(arrNumbs.join(", "));

}

arrayModifier([ '23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0',
                'multiply 1 2', 'multiply 2 1', 'decrease','end']);
arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end']);