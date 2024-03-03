function townPopulation(inputArr) {

    let townPopul = {};
    let name = "";
    let population = 0;

    for (let i = 0; i < inputArr.length; i++) {

        [name, population] = inputArr[i].split(" <-> ");
        population = Number(population);

        if (townPopul.hasOwnProperty(name)) townPopul[name] += population;
        else townPopul[name] = population;
    }

    for (const key in townPopul) console.log(`${key} : ${townPopul[key]}`);
}

townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000',
                'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
console.log("------------------------");
townPopulation(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344',
                'Mexico City <-> 23401925', 'Istanbul <-> 1000']);