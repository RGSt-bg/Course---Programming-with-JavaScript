function sortArray(inputArr, order) {

    if (order === "asc") return inputArr.sort((a, b) => a - b);
    else return inputArr.sort((a, b) => b - a);

    /* Tosho's solution - very elegant:
    return order === "asc" ? inputArr.sort((a, b) => a - b) : inputArr.sort((a, b) => b - a);
    */
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');