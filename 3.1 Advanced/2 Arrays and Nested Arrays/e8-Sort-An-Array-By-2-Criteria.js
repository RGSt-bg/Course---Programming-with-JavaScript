function sortAnArrayBy2Criteria(inputArr) {

    // inputArr.sort((a, b)=> {
    //     if (a.length === b.length) return a.localeCompare(b);
    //     else return a.length - b.length});

    inputArr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    
    console.log(inputArr.join("\n"));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log("------------");
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log("------------");
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);