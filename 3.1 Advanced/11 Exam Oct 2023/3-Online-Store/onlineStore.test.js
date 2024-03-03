let {assert} = require("chai");
let {onlineStore} = require('./onlineStore');

describe("onlineStore", () => {
    describe("isProductAvailable", () => {
        it("Incorrect data", () => {
            assert.throws(() => onlineStore.isProductAvailable(500, 2000), "Invalid input.");
            assert.throws(() => onlineStore.isProductAvailable("Glass", "cigar"), "Invalid input.");
        });
        it("Correct data", () => {
            assert.equal(onlineStore.isProductAvailable("Glass", 2000), `Great! Glass is available for purchase.`);
            assert.equal(onlineStore.isProductAvailable("Glass", 0), `Sorry, Glass is currently out of stock.`);
            assert.equal(onlineStore.isProductAvailable("Glass", -3), `Sorry, Glass is currently out of stock.`);
        });
    });

    describe("canAffordProduct", () => {
        it("Incorrect data", () => {
            assert.throws(() => onlineStore.canAffordProduct("Glass", "1"), "Invalid input.");
            assert.throws(() => onlineStore.canAffordProduct("Glass", 500), "Invalid input.");
            assert.throws(() => onlineStore.canAffordProduct(300, "1"), "Invalid input.");
        });
        it("Correct data", () => {
            assert.equal(onlineStore.canAffordProduct(300, 500), "Product purchased. Your remaining balance is 200.");
            assert.equal(onlineStore.canAffordProduct(500, 300), "You don't have sufficient funds to buy this product.");
            assert.equal(onlineStore.canAffordProduct(500, 500), "Product purchased. Your remaining balance is 0.");
        });
    });
});