function calculator(a, operator, b)
{
    switch (operator)
    {
        case '+':
            {
                console.log((a + b).toFixed(2));
                break;
            }
        case '-':
            {
                console.log((a - b).toFixed(2));
                break;
            }
        case '*':
            {
                console.log((a * b).toFixed(2));
                break;
            }
        case '/':
            {
                console.log((a / b).toFixed(2));
                break;
            }
    }

}

calculator(5,'+',10);
calculator(25.5,'-',3);