let {assert} = require("chai");
let {onlineStore} = require('./onlineStore');

describe("onlineStore", () => {
    describe("isProductAvailable", () => {
        it("Incorrect parameters", () => {
            assert.throws(() => onlineStore.isProductAvailable(-5, -5), "Invalid input.");
            assert.throws(() => onlineStore.isProductAvailable("Glass", "Glass"), "Invalid input.");
            assert.throws(() => onlineStore.isProductAvailable(-5, "Glass"), "Invalid input.");
        });
        it("Correct&incorrect quantity", () => {
            assert.equal(onlineStore.isProductAvailable("Glass", 5), "Great! Glass is available for purchase.");
            assert.equal(onlineStore.isProductAvailable("Glass", -5), "Sorry, Glass is currently out of stock.");
            assert.equal(onlineStore.isProductAvailable("Glass", 0), "Sorry, Glass is currently out of stock.");
        });
    });

    describe("canAffordProduct", () => {
        it("Enough&not enough funds", () => {
            assert.equal(onlineStore.canAffordProduct(100, 100), "Product purchased. Your remaining balance is $0.");
            assert.equal(onlineStore.canAffordProduct(100, 10), "You don't have sufficient funds to buy this product.");
            assert.equal(onlineStore.canAffordProduct(100, 1000), "Product purchased. Your remaining balance is $900.");
        });
        it("Incorrect parameters", () => {
            assert.throws(() => onlineStore.canAffordProduct("Glass", "Glass"), "Invalid input.");
        });
    });

    describe("canAffordProduct", () => {
        it("Eligible/non eligible products", () => {
            assert.equal(onlineStore.getRecommendedProducts([{ name: "SexToy1", category: "Pornography" }, { name: "SexToy2", category: "Pornography" }, { name: "Something", category: "Parno" }], "Pornography"), "Recommended products in the Pornography category: SexToy1, SexToy2");
            assert.equal(onlineStore.getRecommendedProducts([{ name: "SexToy1", category: "Pornography" }, { name: "SexToy2", category: "Pornography" }, { name: "Something", category: "Parno" }], "Photography"), "Sorry, we currently have no recommended products in the Photography category.");
        });
        it("Incorrect parameters", () => {
            assert.throws(() => onlineStore.getRecommendedProducts("Glass", "Glass"), "Invalid input.");
            assert.throws(() => onlineStore.getRecommendedProducts([{ name: "SexToy1", category: "Pornography" }, { name: "SexToy2", category: "Pornography" }, { name: "Something", category: "Parno" }], 5), "Invalid input.");
            assert.throws(() => onlineStore.getRecommendedProducts(5, 5), "Invalid input.");
        });
    });
});