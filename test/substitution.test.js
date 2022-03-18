const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe ("This tests the substitution function", () => {
    describe("Checking for outlier conditions", () => {
        it("Should return false when alphabet is less than 26 letters", () => {
            const input = "thinkful";
            const alphabet = "short"
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });
        it("Should return false when alphabet is not made up of unique characters", () => {
            const input = "thinkful";
            const alphabet = "abcabcabcabcabcabcabcabcab";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });
        it("Should return false when alphabet is empty", () => {
            const input = "thinkful";
            const alphabet = '';
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });
    });
    describe("Checking the encode functionality", () => {
        it("Should encode a message using substitution method", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "jrufscpw";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
        it("Should encode a message when using spaces",() =>  {
            const input = "You are an excellent spy";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = 'elp xhm xf mbymwwmfj dne';
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
        it("Should encode a message when using special characters", () => {
            const input = "message";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const expected = "y&ii$r&";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
    });
    describe("Checking the decode functionality", () => {
        it("Should decode a message using substitution method", () => {
            const input = "jrufscpw";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "thinkful";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        });
        it("Should decode a message when using special characters", () => {
            const input = "y&ii$r&";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const expected = "message";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        });
    });

});
