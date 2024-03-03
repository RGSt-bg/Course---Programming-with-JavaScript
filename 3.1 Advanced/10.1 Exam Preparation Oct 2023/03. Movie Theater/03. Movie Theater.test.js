let {assert} = require("chai");
let {movieTheater} = require('./03. Movie Theater');

describe("chooseYourCar", () => {
    describe("ageRestrictions", () => {
        it("Correct type", () => {
            assert.equal(movieTheater.ageRestrictions("G"), "All ages admitted to watch the movie");
            assert.equal(movieTheater.ageRestrictions("PG"), "Parental guidance suggested! Some material may not be suitable for pre-teenagers");
            assert.equal(movieTheater.ageRestrictions("R"), "Restricted! Under 17 requires accompanying parent or adult guardian");
            assert.equal(movieTheater.ageRestrictions("NC-17"), "No one under 17 admitted to watch the movie");
            assert.equal(movieTheater.ageRestrictions("dfgfth"), "There are no age restrictions for this movie");
        });
    });
    describe("ageRestrictions", () => {
        it("Correct type", () => {
            assert.equal(movieTheater.moneySpent(2, ["Nachos", "Popcorn"], ["Soda", "Water"]), "The total cost for the purchase is 44.50");
            assert.equal(movieTheater.moneySpent(5, ["Nachos", "Popcorn"], ["Soda", "Water"]), "The total cost for the purchase with applied discount is 71.60");
        });
        it("Incorrect type", () => {
            assert.throws(() => movieTheater.moneySpent("w2", ["Nachos", "Popcorn"], ["Soda", "Water"]), "Invalid input");
            assert.throws(() => movieTheater.moneySpent(2, "khjgjb", ["Soda", "Water"]), "Invalid input");
            assert.throws(() => movieTheater.moneySpent(3, ["Nachos", "Popcorn"], 67), "Invalid input");
        });
    });
    describe("reservation", () => {
        it("Correct type", () => {
            assert.equal(movieTheater.reservation(([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }]), 7), 1);
        });
        it("Incorrect type", () => {
            assert.throws(() => movieTheater.movieTheater.reservation(([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }]), "dfsdgf"));
            assert.throws(() => movieTheater.movieTheater.reservation("hjgbjhgfb", 2));
        });
    });
});
