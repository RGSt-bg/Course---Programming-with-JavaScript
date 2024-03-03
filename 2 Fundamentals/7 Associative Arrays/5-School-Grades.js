function schoolGrades(inputArr) {

    let gradesMap = new Map();

    inputArr.forEach(line => {
        let name = line.split(" ").shift();
        let grades = line.split(" ").slice(1,).map(Number);
        if (gradesMap.has(name)) gradesMap.set(name, grades.concat(gradesMap.get(name)));
        else gradesMap.set(name, grades);
    });

    let gradesPrint = Array.from(gradesMap.entries());
    gradesPrint.sort();

    gradesPrint.forEach(line => {
        let elem = 0;
        for (let i = 0; i < line[1].length; i++) {
            elem += line[1][i];
        };

        let averGrade = elem / line[1].length;
        console.log(`${line[0]}: ${averGrade.toFixed(2)}`);

    });
}

schoolGrades(['Lilly 4 6 6 5','Tim 5 6','Tammy 2 4 3','Tim 6 6']);
console.log("-------------------");
schoolGrades(['Steven 3 5 6 4','George 4 6','Tammy 2 5 3','Steven 6 3']);