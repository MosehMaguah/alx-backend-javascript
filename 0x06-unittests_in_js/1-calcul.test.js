const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
        const res = calculateNumber("SUM", 1, 4);
        assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
        const res = calculateNumber("SUM", 1.5, 2.1);
        assert.strictEqual(res, 4);
    });
    it(`checking if numbers round`, function() {
        const res = calculateNumber("SUBTRACT", 3, 2);
        assert.strictEqual(res, 1);
    });
    it(`checking if numbers round`, function() {
        const res = calculateNumber("SUBTRACT", 3.2, 2.6);
        assert.strictEqual(res, 0);
    });
    it(`checking if numbers round`, function() {
        const res = calculateNumber("DIVIDE", 4, 2);
        assert.strictEqual(res, 2);
    });
    it(`checking if numbers round`, function() {
        const res = calculateNumber("DIVIDE", 4, 0);
        assert.strictEqual(res, "Error");
    });
});