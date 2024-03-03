let {assert} = require("chai");
let {chooseYourCar} = require('./chooseYourCar');

describe("chooseYourCar", () => {
    describe("choosingType", () => {
        it("Incorrect type", () => {
            assert.throws(() => chooseYourCar.choosingType("Sedi", "Blue", 2000), "This type of car is not what you are looking for.");
        });
        it("Incorrect year", () => {
            assert.throws(() => chooseYourCar.choosingType("Sedan", "Blue", 1890), "Invalid Year!");
            assert.throws(() => chooseYourCar.choosingType("Sedan", "Blue", 2023), "Invalid Year!");
        });
        it("Correct type", () => {
            assert.equal(chooseYourCar.choosingType("Sedan", "Blue", 2000), `This Sedan is too old for you, especially with that Blue color.`);
        });
        it("Correct year", () => {
            assert.equal(chooseYourCar.choosingType("Sedan", "Blue", 2015), `This Blue Sedan meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType("Sedan", "Blue", 2000), `This Sedan is too old for you, especially with that Blue color.`);
        });
    });

    describe("brandName", () => {
        it("Incorrect brands", () => {
            assert.throws(() => chooseYourCar.brandName("Sedi", 1), "Invalid Information!");
        });
        it("Incorrect brand index", () => {
            assert.throws(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3), "Invalid Information!");
            assert.throws(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -2), "Invalid Information!");
            assert.throws(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2.5), "Invalid Information!");
        });
        it("Correct brands", () => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1), "BMW, Peugeot");
        });
        it("Correct brand index", () => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2), "BMW, Toyota");
        });
    });

    describe("carFuelConsumption", () => {
        it("Correct values", () => {
            assert.equal(chooseYourCar.carFuelConsumption(50, 3.4), `The car is efficient enough, it burns 6.80 liters/100 km.`);
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), `The car is efficient enough, it burns 7.00 liters/100 km.`);
            assert.equal(chooseYourCar.carFuelConsumption(50, 4.4), `The car burns too much fuel - 8.80 liters!`);
        });
        it("Incorrect values", () => {
            assert.throws(() => chooseYourCar.carFuelConsumption("sdf", 3.4), "Invalid Information!");
            assert.throws(() => chooseYourCar.carFuelConsumption(50, "fgjl"), "Invalid Information!");
            assert.throws(() => chooseYourCar.carFuelConsumption(-50, 3.4), "Invalid Information!");
            assert.throws(() => chooseYourCar.carFuelConsumption(50, -3.4), "Invalid Information!");
            assert.throws(() => chooseYourCar.carFuelConsumption(-50, -3.4), "Invalid Information!");
        });
    });
});