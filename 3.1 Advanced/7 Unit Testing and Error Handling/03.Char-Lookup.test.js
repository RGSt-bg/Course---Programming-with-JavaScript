let {assert} = require("chai");
let {lookupChar} = require('./03.Char-Lookup');

describe("test with incorrect parameters", () => {
    it("test with number as string and string as number", () => {
        assert.equal(lookupChar(5, "Sharo"), undefined, "return value must be undefined");
    });
    it("test with number two numbers", () => {
        assert.equal(lookupChar(555, 2), undefined, "return value must be undefined");
    });
    it("test with number two strings", () => {
        assert.equal(lookupChar("Kudzho", "Sharo"), undefined, "return value must be undefined");
    });
    it("test with number correct parameters, but index, bigger than length of the string", () => {
        assert.equal(lookupChar("Kudzho", 6), "Incorrect index", "return value must be 'Incorrect index'");
    });
    it("test with number correct parameters, but negative index", () => {
        assert.equal(lookupChar("Kudzho", -6), "Incorrect index", "return value must be 'Incorrect index'");
    });
    it("test with index, which is number with floating point", () => {
        assert.equal(lookupChar("Kudzho", 2.5), undefined, "return value must be undefined");
    });
});

describe("test with correct parameters", () => {
    it("test with index 0", () => {
        assert.equal(lookupChar("Kudzho", 0), "K", "return value must be 'K'");
    });
    it("test with index 3", () => {
        assert.equal(lookupChar("Kudzho", 3), "z", "return value must be 'z'");
    });
    it("test with index 5", () => {
        assert.equal(lookupChar("Kudzho", 5), "o", "return value must be 'o'");
    });
});
