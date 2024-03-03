function gladiatorExpenses(lostFights, helmet, sword, shield, armor)
{
    let helmetCount = 0;
    let swordCount = 0;
    let shieldtCount = 0;
    let armorCount = 0;
    let sum = 0;
    let shieldFlag = 0;

    for (let i = 1; i <= lostFights; i++)
    {
        if (i % 2 == 0) helmetCount++;
        if (i % 3 == 0) swordCount++;
        if (i % 2 == 0 && i % 3 == 0)
        {
            shieldtCount++;
            shieldFlag++;
        }
        if (shieldFlag == 2)
        {
            armorCount++;
            shieldFlag = 0;
        }
    }
    sum = helmet * helmetCount + sword * swordCount + shield * shieldtCount + armor * armorCount;
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(7,2,3,4,5);
gladiatorExpenses(23,12.50,21.50,40,200);