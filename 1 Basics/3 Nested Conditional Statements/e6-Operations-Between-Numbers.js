function operationsBetweenNumbers(input)
{
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2]; //"+", "-", "*", "/", "%"
    let result = 0.00;
    let flag = "";

    switch (operator)
    {
        case "+":
            {
                result = N1 + N2;
                if (result % 2 == 0) flag = "even";
                else flag = "odd";
                console.log(`${N1} ${operator} ${N2} = ${result} - ${flag}`);
            }
        break;
        case "-":
            {
            result = N1 - N2;
            if (result % 2 == 0) flag = "even";
            else flag = "odd";
            console.log(`${N1} ${operator} ${N2} = ${result} - ${flag}`);
            }
        break;
        case "*":
            {
            result = N1 * N2;
            if (result % 2 == 0) flag = "even";
            else flag = "odd";
            console.log(`${N1} ${operator} ${N2} = ${result} - ${flag}`);
            }
        break;
        case "/":
            {
            result = N1 / N2;
            if (N2 > 0) console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`);
            else console.log(`Cannot divide ${N1} by zero`);
            }
        break;
        case "%":
            {
            result = N1 % N2;
            if (N2 > 0) console.log(`${N1} ${operator} ${N2} = ${result}`);
            else console.log(`Cannot divide ${N1} by zero`);
             }
        break;
   }


}

operationsBetweenNumbers(["10","0","%"]);