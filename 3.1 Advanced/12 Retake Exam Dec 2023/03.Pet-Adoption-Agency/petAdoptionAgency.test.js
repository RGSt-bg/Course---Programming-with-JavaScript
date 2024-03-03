let {assert} = require("chai");
let {petAdoptionAgency} = require('./petAdoptionAgency.js');

describe("petAdoptionAgency", () => {
    describe("isPetAvailable", () => {
        it("Incorrect parameters", () => {
            assert.throws(() => petAdoptionAgency.isPetAvailable(8, "Dog", 1890), "Invalid input");
            assert.throws(() => petAdoptionAgency.isPetAvailable("Dog", "Dog", 1890), "Invalid input");
            assert.throws(() => petAdoptionAgency.isPetAvailable("Dog", 8, 1890), "Invalid input");
            assert.throws(() => petAdoptionAgency.isPetAvailable(8, "Dog", true), "Invalid input");
        });
        it("Correct parameters", () => {
            assert.equal(petAdoptionAgency.isPetAvailable("Dog", 0, true), `Sorry, there are no Dog(s) available for adoption at the agency.`);
            assert.equal(petAdoptionAgency.isPetAvailable("Dog", -3, true), `Sorry, there are no Dog(s) available for adoption at the agency.`);
            assert.equal(petAdoptionAgency.isPetAvailable("Dog", 3, true), `Great! We have 3 vaccinated Dog(s) available for adoption at the agency.`);
            assert.equal(petAdoptionAgency.isPetAvailable("Dog", 3, false), `Great! We have 3 Dog(s) available for adoption, but they need vaccination.`);
        });
    });

    describe("getRecommendedPets", () => {
        it("Incorrect parameters", () => {
            assert.throws(() => petAdoptionAgency.getRecommendedPets("Cat", 3), "Invalid input");
            assert.throws(() => petAdoptionAgency.getRecommendedPets([
                { name: "Buffy", traits: "friendly" },
                { name: "Johny", traits: "playful" },
                { name: "Bobbi", traits: "friendly" }
            ], 5), "Invalid input");
            assert.throws(() => petAdoptionAgency.getRecommendedPets("friendly", "friendly"), "Invalid input");
        });
        it("Not have desired pets", () => {
            assert.deepStrictEqual(petAdoptionAgency.getRecommendedPets([
                { name: "Buffy", traits: "friendly" },
                { name: "Johny", traits: "playful" },
                { name: "Bobbi", traits: "friendly" }
            ], "friendly"), `Recommended pets with the desired traits (friendly): Buffy, Bobbi`);
        });
        it("Have desired pets", () => {
            assert.deepStrictEqual(petAdoptionAgency.getRecommendedPets([
                { name: "Buffy", traits: "bad" },
                { name: "Johny", traits: "playful" },
                { name: "Bobbi", traits: "bad" }
            ], "friendly"), `Sorry, we currently have no recommended pets with the desired traits: friendly.`);
        });
    });

    describe("adoptPet", () => {
        it("Incorrect parameters", () => {
            assert.throws(() => petAdoptionAgency.adoptPet(5, 3), "Invalid input");
            assert.throws(() => petAdoptionAgency.adoptPet("Cat", 3), "Invalid input");
            assert.throws(() => petAdoptionAgency.adoptPet(3, "Pissi"), "Invalid input");
        });
        it("Not have desired pets", () => {
            assert.equal(petAdoptionAgency.adoptPet("Dog", "George"), `Congratulations, George! You have adopted Dog from the agency. Enjoy your time with your new furry friend!`);
        });
    });
});