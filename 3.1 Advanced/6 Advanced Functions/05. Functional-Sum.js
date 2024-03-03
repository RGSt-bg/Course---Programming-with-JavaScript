// Тук тотално не разбрах какво се случи!!!

let functionalSum = (function () {
    let sum = 0;
 
    return function add(number) {
        sum += number;
        add.toString = function () {
            return sum;
        };
        return add;
    }
})();
 
console.log(functionalSum(1)(6)(-3).toString());

/*
function add(num){
    let sum = num
   
    function res(num1){
        sum +=num1
        return res
    }
    res.toString = function(){return sum}
    return res
}*/