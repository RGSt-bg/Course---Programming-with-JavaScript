function sortAnArrayBy2Criteria(arrStr) {

    let sortedArr = arrStr.sort((a, b) => {
       if (a.length !== b.length) return a.length - b.length;
       return a.localeCompare(b); 
    });

    console.log(sortedArr.join("\n"));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);