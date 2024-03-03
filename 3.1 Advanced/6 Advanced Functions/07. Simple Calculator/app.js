function calculator() {
    let selectorOne;
    let selectorTwo;
    let selectorRes;

    return {
        
        init: function(selector1, selector2, resultSelector) {
            selectorOne = document.querySelector(selector1);
            selectorTwo = document.querySelector(selector2);
            selectorRes = document.querySelector(resultSelector);
        },

        add: function() {
            let numOne = Number(selectorOne.value);
            let numTwo = Number(selectorTwo.value);
            let sum = numOne + numTwo;
            selectorRes.value = sum;
        },

        subtract: function() {
            let numOne = Number(selectorOne.value);
            let numTwo = Number(selectorTwo.value);
            let sub = numOne - numTwo;
            selectorRes.value = sub;
        }
    }
}

/* Решението на Теди:
function calculator() {
    let sel1
    let sel2
    let result


    let obj = {
        init: function(selector1, selector2, resultSelector) {
            sel1=document.querySelector(selector1)
            sel2=document.querySelector(selector2)
            result=document.querySelector(resultSelector)
           
        } ,
        add: function() {
            result.value = Number(sel1.value) + Number(sel2.value )
        } ,
        subtract: function() {
            result.value = Number(sel1.value) - Number(sel2.value )
        } ,
    }

 return obj;
}*/