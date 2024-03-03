let {assert} = require("chai");
let {recipeSelection} = require('./recipeSelection');

describe("recipeSelection", () => {
    describe("isTypeSuitable", () => {
        it("Incorrect parameters", () => {
            assert.throws(() => recipeSelection.isTypeSuitable(-5, -5), "Invalid input");
            assert.throws(() => recipeSelection.isTypeSuitable("Glass", -5), "Invalid input");
            assert.throws(() => recipeSelection.isTypeSuitable(-5, "Glass"), "Invalid input");
        });
        it("Is recipe suitable or not", () => {
            assert.equal(recipeSelection.isTypeSuitable("Meat", "Vegetarian"), "This recipe is not suitable for vegetarians");
            assert.equal(recipeSelection.isTypeSuitable("Meat", "Vegan"), "This recipe is not suitable for vegans");
            assert.equal(recipeSelection.isTypeSuitable("Dairy", "Vegan"), "This recipe is not suitable for vegans");
            assert.equal(recipeSelection.isTypeSuitable("Something", "Vegetarian"), "This recipe is suitable for your dietary restriction");
        });
    });

    describe("isItAffordable", () => {
        it("Incorrect parameters", () => {
            assert.throws(() => recipeSelection.isItAffordable("Glass", "Glass"), "Invalid input");
            assert.throws(() => recipeSelection.isItAffordable(5, "Glass"), "Invalid input");
            assert.throws(() => recipeSelection.isItAffordable("Glass", 5), "Invalid input");
        });
        it("Enough&not enough funds", () => {
            assert.equal(recipeSelection.isItAffordable(100, 100), "Recipe ingredients bought. You have 0$ left");
            assert.equal(recipeSelection.isItAffordable(100, 10), "You don't have enough budget to afford this recipe");
            assert.equal(recipeSelection.isItAffordable(100, 1000), "Recipe ingredients bought. You have 900$ left");
        });
    });

    describe("getRecipesByCategory", () => {
        it("Correct parameters", () => {
            assert.deepStrictEqual(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Tuti Fruti", category: "Asian" }], "Asian"), ["Spicy Tofu Stir-Fry", "Tuti Fruti"]);
            assert.deepStrictEqual(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Tuti Fruti", category: "Asian" }], "European"), []);
        });
        it("Incorrect parameters", () => {
            assert.throws(() => recipeSelection.getRecipesByCategory("Glass", "Glass"), "Invalid input");
            assert.throws(() => recipeSelection.getRecipesByCategory([{ name: "SexToy1", category: "Pornography" }, { name: "SexToy2", category: "Pornography" }, { name: "Something", category: "Parno" }], 5), "Invalid input");
            assert.throws(() => recipeSelection.getRecipesByCategory(5, 5), "Invalid input");
        });
    });

});