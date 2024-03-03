function carFactory(inputObj) {

    let newCar = {};
    let carEngine = {};
    let carCarriage = {};
    let carWheels = 0;
    let newWheels = [];

    newCar.model = inputObj.model;
    if (inputObj.power < 120) {
        carEngine.power = 90;
        carEngine.volume = 1800;
    }
    else if (inputObj.power >= 120 && inputObj.power < 200) {
        carEngine.power = 120;
        carEngine.volume = 2400;
    }
    else {
        carEngine.power = 200;
        carEngine.volume = 3500;
    }
    newCar.engine = carEngine;

    if (inputObj.carriage === "hatchback") carCarriage.type = "hatchback";
    else carCarriage.type = "coupe";
    carCarriage.color = inputObj.color;
    newCar.carriage = carCarriage;

    if (!(inputObj.wheelsize % 2 === 0)) carWheels = Math.floor(inputObj.wheelsize);
    else carWheels = Math.floor(inputObj.wheelsize - 1);
    newWheels = ((carWheels + " ").repeat(4)).split(" ").map(s => Number(s));
    newWheels.pop();
    newCar.wheels = newWheels;

    // return newCar;
    console.table(newCar);
}

carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 });
console.log("------------------------------------------------------------------------------------");
carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 });