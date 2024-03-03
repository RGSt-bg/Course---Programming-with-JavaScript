let {assert} = require("chai");
let {mathEnforcer} = require('./04.Math-Enforcer');

describe("test function 'addFive'", () => {
    describe("test with incorrect parameters", () => {
        it("test with an array", () => {
            assert.equal(mathEnforcer.addFive([1, 2, 3]), undefined, "return value must be undefined");
        });
        it("test with an object", () => {
            assert.equal(mathEnforcer.addFive({name: "Kudzho", age: 7}), undefined, "return value must be undefined");
        });
        it("test with a string", () => {
            assert.equal(mathEnforcer.addFive("Kudzho"), undefined, "return value must be undefined");
        });
    });
    describe("test with correct parameters", () => {
        it("test with negative number with floating point", () => {
            assert.equal(mathEnforcer.addFive(-5.5), -0.5, "return value must be -0.5");
        });
        it("test with negative number", () => {
            assert.equal(mathEnforcer.addFive(-5), 0, "return value must be 0");
        });
        it("test with zero", () => {
            assert.equal(mathEnforcer.addFive(0), 5, "return value must be 5");
        });
        it("test with positive number", () => {
            assert.equal(mathEnforcer.addFive(5), 10, "return value must be 10");
        });
        it("test with positive number with floating point", () => {
            assert.equal(mathEnforcer.addFive(5.5), 10.5, "return value must be 10.5");
        });
    });
});
describe("test function 'subtractTen'", () => {
    describe("test with incorrect parameters", () => {
        it("test with an array", () => {
            assert.equal(mathEnforcer.subtractTen([1, 2, 3]), undefined, "return value must be undefined");
        });
        it("test with an object", () => {
            assert.equal(mathEnforcer.subtractTen({name: "Kudzho", age: 7}), undefined, "return value must be undefined");
        });
        it("test with a string", () => {
            assert.equal(mathEnforcer.subtractTen("Kudzho"), undefined, "return value must be undefined");
        });
    });
    describe("test with correct parameters", () => {
        it("test negative numbers with floating point", () => {
            assert.equal(mathEnforcer.subtractTen(-5.5), -15.5, "return value must be -15.5");
        });
        it("test with negative numbers", () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15, "return value must be -15");
        });
        it("test with zero", () => {
            assert.equal(mathEnforcer.subtractTen(0), -10, "return value must be -10");
        });
        it("test with positive numbers", () => {
            assert.equal(mathEnforcer.subtractTen(10), 0, "return value must be 0");
        });
        it("test with positive numbers with floating point", () => {
            assert.equal(mathEnforcer.subtractTen(5.5), -4.5, "return value must be -4.5");
        });
    });
});
describe("test function 'sum'", () => {
    describe("test with incorrect parameters", () => {
        it("test with array and number", () => {
            assert.equal(mathEnforcer.sum([1, 2, 3], 5), undefined, "return value must be undefined");
        });
        it("test with number and object", () => {
            assert.equal(mathEnforcer.sum(5, {name: "Kudzho", age: 7}), undefined, "return value must be undefined");
        });
        it("test with a string and number", () => {
            assert.equal(mathEnforcer.sum("Kudzho", 5), undefined, "return value must be undefined");
        });
    });
    describe("test with correct parameters", () => {
        it("test with negative integer numbers", () => {
            assert.equal(mathEnforcer.sum(-20, -5), -25, "return value must be -25");
        });
        it("test with negative numbers with floating point", () => {
            assert.equal(mathEnforcer.sum(-5.5, -15.5), -21, "return value must be -21");
        });
        it("test with zero values", () => {
            assert.equal(mathEnforcer.sum(0, 0), 0, "return value must be 0");
        });
        it("test with positive integer numbers", () => {
            assert.equal(mathEnforcer.sum(10, 5), 15, "return value must be 15");
        });
        it("test with positive numbers with floating point", () => {
            assert.equal(mathEnforcer.sum(5.5, 15.5), 21, "return value must be 21");
        });
    });
});