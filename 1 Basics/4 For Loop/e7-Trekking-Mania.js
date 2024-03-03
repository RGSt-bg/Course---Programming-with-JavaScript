function trekkingMania(input)
{
    let groups = Number(input[0]);
    let people = 0;
    let allPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandgharo = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groups; i++)
    {
        people = Number(input[i]);
        allPeople = allPeople + people;
        if (people <= 0) console.log("Babinata vi trankina!!!")
        else if (people > 0 && people <= 5) musala = musala + people;
        else if (people > 5 && people <= 12) monblan = monblan + people;
        else if (people > 12 && people <= 25) kilimandgharo = kilimandgharo + people;
        else if (people > 25 && people <= 40) k2 = k2 + people;
        else everest = everest + people;
    }

    musala = (musala / allPeople * 100).toFixed(2);
    monblan = (monblan / allPeople * 100).toFixed(2);
    kilimandgharo = (kilimandgharo / allPeople * 100).toFixed(2);
    k2 = (k2 / allPeople * 100).toFixed(2);
    everest = (everest / allPeople * 100).toFixed(2);

    console.log(`${musala}%`);
    console.log(`${monblan}%`);
    console.log(`${kilimandgharo}%`);
    console.log(`${k2}%`);
    console.log(`${everest}%`);
}

trekkingMania(["5","25","41","31","250","6"])