const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe ("caesar() decoder ring function test", () => {
    it ("should return false when shift is equal to zero", () => {
        const message = "zebra magazine";
        const shift = 0;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it ("should return false when shift is greater than 25", () => {
        const message = "zebra magazine";
        const shift = 26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it ("should return false when shift is less than -25", () => {
        const message = "zebra magazine";
        const shift = -26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    describe("encoding messages", () => {
        it("should encode a message appropriately when given a string", () => {
            const message = "zebra";
            const shift = 3;
            const actual = caesar(message, shift, true);
            const expected = "cheud";
            expect(actual).to.equal(expected);
        });
        it("should encode a message while ignoring capital letters", () => {
            const message = "Zebra";
            const shift = 3;
            const actual = caesar(message, shift, true);
            const expected = "cheud";
            expect(actual).to.equal(expected);
        });
        it("should handle shifting letters to the right at the end of the alphabet", () => {
            const message = "Zebra";
            const shift = 3;
            const actual = caesar(message, shift, true);
            const expected = "cheud";
            expect(actual).to.equal(expected); 
        });
    })
    describe("decoding messages" , () => {
        it("should decode messages when given a coded string", () => {
            const message = "cheud";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "zebra";
            expect(actual).to.equal(expected);
        });
        it("should handle a message when shifting letters to the left of the alphabet", () => {
            const message = "zebra magazine";
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "wbyox jxdxwfkb";
            expect(actual).to.equal(expected);
        });
        it("should decode a message while ignoring special characters", () => {
            const message = "zebra. magazine.";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "wbyox. jxdxwfkb.";
            expect(actual).to.equal(expected);
        });
    });
});
