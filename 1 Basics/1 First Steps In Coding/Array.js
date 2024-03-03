function array1() {
    let arr = ["Rumen", "53"]; //И двата елемента на масива са стрингове

    console.table(arr);
    console.log(arr[0]);
    console.log(Number(arr[1] - 1)); //Number преобразува (ако е възможно!) стринг в число.
    console.log(arr[1]);
}

array1();

function array2(input) {
    
    console.table(input);
    
    let name = input[0];
    let age = input[1];
    let bla = input[2];

    console.log(name);
    console.log(age + 1); //Тъй като вторият параметър на функцията е подаден като число, може да се осъществи мат. операция събиране
    console.log(bla);
    console.log(input.length); //Проба за коментар - работи!!!

}

array2(["Rumen", 53]);