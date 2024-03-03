function dungeonestDark(arrRooms)
{
    let health = 100;
    let coins = 0;
    let spacePos = "";
    let something = "";
    let numb = 0;
    let newArr = [];
    let input = arrRooms + "|";
    let firstChar = 0;
    let currentChar = 0;
    let tmpStr = "";
    let died = false;

    while (currentChar < input.length - 1) //създава нов масив от предмет/чудовище и числата към тях.
    {
        currentChar = input.indexOf("|", firstChar);
        tmpStr = input.slice(firstChar, currentChar);
        firstChar = currentChar + 1;

        spacePos = tmpStr.indexOf(" ", 0);
        something = tmpStr.slice(0, spacePos);
        newArr.push(something);
        spacePos++;
        something = tmpStr.slice(spacePos, tmpStr.length);
        newArr.push(something);
    }

    for (i = 0; i < newArr.length; i += 2)
    {
        if (died) break;
        something = newArr[i];
        numb = Number(newArr[i+1]);

        switch (something)
        {
            case "potion":
            {
                if (health + numb > 100)
		        {
			        numb = 100 - health;
			        health = 100;
		        }
                else health += numb;

                console.log(`You healed for ${numb} hp.`);
                console.log(`Current health: ${health} hp.`);

                break;
            }
            case "chest":
            {
                coins += Number(numb);
                console.log(`You found ${numb} coins.`);
                break;
            }
            default:
            {
                health -= Number(numb);

                if (health <= 0) health = 0;

                if (health > 0) 
                    console.log(`You slayed ${something}.`);
                else
                {
                    console.log(`You died! Killed by ${something}.`);
                    numb = (i / 2) + 1;
                    console.log(`Best room: ${numb}`);
                    died = true;
                }
                break;
            }
        }
        if (i+2 == newArr.length)
        {
            console.log("You've made it!");
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${health}`);
        }
    }

}

dungeonestDark(["rat 110|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

// Обърнете внимание какво ще се случи ако срещнете нещо което прави повече от 
// 100 точки демидж и съответно какъв ще е респонса на вашата функция.