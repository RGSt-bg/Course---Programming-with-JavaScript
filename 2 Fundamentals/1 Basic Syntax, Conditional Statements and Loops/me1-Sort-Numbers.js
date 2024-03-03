function sortNumbers(n1, n2, n3)
{
    let temp = 0;

    while (n1 < n2 || n2 < n3 || n1 < n3)
    {
        if (n1 < n2)
        {
            temp = n1;
            n1 = n2;
            n2 = temp;
        }
        if (n2 < n3)
        {
            temp = n2;
            n2 = n3;
            n3 = temp;
        }
    }
    console.log(n1);
    console.log(n2);
    console.log(n3);
}

sortNumbers(1, 2, 3);