let {assert} = require("chai");
let {isOddOrEven} = require('./02.Even-Or-Odd');

describe("test with incorrect parameters", () => {
    it("test with an object", () => {
        assert.equal(isOddOrEven({name: "Sharo"}), undefined, "return value must be undefined");
    });
    it("test with an array", () => {
        assert.equal(isOddOrEven([1, 2, 3]), undefined, "return value must be undefined");
    });
    it("test with a number", () => {
        assert.equal(isOddOrEven(55), undefined, "return value must be undefined");
    });
});

describe("test with correct parameters", () => {
    it("test with a string with even length", () => {
        assert.equal(isOddOrEven("Valentinka"), "even", "return value must be even");
    });
    it("test with a string with odd length", () => {
        assert.equal(isOddOrEven("Valentina"), "odd", "return value must be odd");
    });
});