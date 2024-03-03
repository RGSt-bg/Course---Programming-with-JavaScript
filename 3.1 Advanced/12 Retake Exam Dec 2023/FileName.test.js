let {assert} = require("chai");
let {petAdoptionAgency} = require('./<FileName>');

describe("petAdoptionAgency", () => {
    describe("isPetAvailable", () => {
        it("Incorrect parameters", () => {
            assert.throws(() => petAdoptionAgency.isPetAvailable(8, "Dog", 1890), "Invalid input");
            assert.throws(() => petAdoptionAgency.isPetAvailable("Dog", "Dog", 1890), "Invalid input");
            assert.throws(() => petAdoptionAgency.isPetAvailable("Dog", 8, 1890), "Invalid input");
            assert.throws(() => petAdoptionAgency.isPetAvailable(8, "Dog", true), "Invalid input");
        });
        it("Correct type", () => {
            assert.equal(chooseYourCar.choosingType("Sedan", "Blue", 2000), `This Sedan is too old for you, especially with that Blue color.`);
        });
        it("Correct year", () => {
            assert.equal(chooseYourCar.choosingType("Sedan", "Blue", 2015), `This Blue Sedan meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType("Sedan", "Blue", 2000), `This Sedan is too old for you, especially with that Blue color.`);
        });
    });

    describe("<Method2Name>", () => {
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
});