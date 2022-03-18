const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Testing for the polybius decoder ring problem", () => {
    describe("Encoding tests", () => {
        it("Should encode a message into a string of paired numbers based on a Polybius square", () => {
            const input = "thinkful";
            const expected = "4432423352125413";
            const actual = polybius(input, true);
            expect(actual).to.equal(expected);
        });
        it("Should appropriately encode a message with spaces", () => {
            const input = "Hello world";
            const expected = "3251131343 2543241341";
            const actual = polybius(input, true);
            expect(actual).to.equal(expected);
        });
        it("Should encode both 'i' and 'j' as 42", () => {
            const input = "ij";
            const expected = "4242";
            const actual = polybius(input, true);
            expect(actual).to.equal(expected);
        });
    });
    describe("Decoding tests", () => {
        it("Should decode a string of numbers into a message", () => {
            const input = "4432423352125413";
            const expected = "th(i/j)nkful";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        });
        it("Should appropriately decode a message with spaces", () => {
            const input = "3251131343 2543241341";
            const expected = "hello world";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        });
        it("Should decode 42 to '(i/j)'", () => {
            const input = "42";
            const expected = "(i/j)";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        });
        it("Should return false when given an odd number of numbers to decode", () => {
            const input = "44324233521254134";
            const expected = false;
            const actual = polybius(input, false);
            expect(actual).to.be.false;
        });
    });
});