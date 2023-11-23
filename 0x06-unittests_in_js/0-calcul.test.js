const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
        const res = calculateNumber(1, 4);
        assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
        const res = calculateNumber(1.5, 2.1);
        assert.strictEqual(res, 4);
    });
    it(`checking if numbers round`, function() {
        const res = calculateNumber(1, 2);
        assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
        const res = calculateNumber(3.2, 2.6);
        assert.strictEqual(res, 6);
    });
    it(`checking if numbers round`, function() {
        const res = calculateNumber(-2.2, -6.3);
        assert.strictEqual(res, -8);
    });
});