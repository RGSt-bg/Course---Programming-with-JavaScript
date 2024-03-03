function numbersEndingIn7()
{
for (let i = 1; i < 1000; i++)
    {
        if (i % 10 == 7) console.log(i); //Защо в подсказката дават ===? Нямам различни типове данни!
    }
}

numbersEndingIn7();