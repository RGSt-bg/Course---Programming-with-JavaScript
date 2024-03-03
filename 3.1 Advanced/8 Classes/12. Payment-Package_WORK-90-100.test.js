let {describe} = require("mocha");
let {PaymentPackage} = require("./12. Payment-Package");
let {assert} = require("chai");
let paymentPackage;

describe("create an instance", () => {

    beforeEach(() => {
        paymentPackage = new PaymentPackage("Niki", 155);
    })

    describe("tests with correct parameters", () => {

        it("name should be correct", () => {
            assert.equal(paymentPackage._name, "Niki", "name was correct set to Niki");
        })
        it("value should be correct", () => {
            assert.equal(paymentPackage._value, 155, "value was correct set to 155");
        })
        it("VAT should be correct", () => {
            assert.equal(paymentPackage._VAT, 20, "VAT was correct set to 20");
        })
        it("active should be correct", () => {
            assert.ok(paymentPackage._active, "VAT was correct set to true");
        })
    })
})
    
    describe("tests with incorrect parameters", () => {

        it("missing instance parameters", () => {
            assert.throws(() => new PaymentPackage());
        })
        it("incorrect name", () => {
            assert.throws(() => new PaymentPackage("", 55));
            assert.throws(() => new PaymentPackage(25, 55));
        })
        it("incorrect value", () => {
            assert.throws(() => new PaymentPackage("Bobi", -5));
            assert.ok(() => new PaymentPackage("Bobi", 0));
            assert.throws(() => new PaymentPackage("Bobi", "Koko"));
        })
        it("incorrect VAT", () => {
            assert.throws(() => paymentPackage.VAT = "Dido");
            assert.ok(() => paymentPackage.VAT = 0);
            assert.throws(() => paymentPackage.VAT = -5);
        })
        it("incorrect active", () => {
            assert.throws(() => paymentPackage.active = "Dido");
            assert.throws(() => paymentPackage.active = -5);
        })
    })

    describe("test function toString", () => {
        it("with status 'active'", () => {
            let paymentPackage = new PaymentPackage("Ico", 30);
            let result = [
                "Package: Ico",
                "- Value (excl. VAT): 30",
                "- Value (VAT 20%): 36"].join("\n");
            assert.equal(paymentPackage.toString(), result);
        })
        it("with status 'inactive'", () => {
            let paymentPackage = new PaymentPackage("Ico", 30);
            paymentPackage.active = false;
            let result = [
                "Package: Ico (inactive)",
                "- Value (excl. VAT): 30",
                "- Value (VAT 20%): 36"].join("\n");
            assert.equal(paymentPackage.toString(), result);
        })
    })

    // describe("tests Get accessors", () => {  //Тези тестове не дадоха нито една точка!

    //     it("accessor Get for 'name' should work correct", () => {
    //         assert.equal(paymentPackage.name, "Niki");
    //     })
    //     it("accessor Get for 'value' should work correct", () => {
    //         assert.equal(paymentPackage.value, 155);
    //     })
    //     it("accessor Get for 'VAT' should work correct", () => {
    //         assert.equal(paymentPackage.VAT, 20);
    //     })
    //     it("accessor Get for 'active' should work correct", () => {
    //         assert.equal(paymentPackage.active, true);
    //     })
    // })

        // it("active should be incorrect", () => {  // При този тест от 70 ми намали на 60!
        //     assert.notOk(paymentPackage.active, false, "VAT was correct not set to false");
        // })

