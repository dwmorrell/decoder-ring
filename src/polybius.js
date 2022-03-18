// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  // Object for the encode method
  const square = {a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, l: 13, m: 23, n: 33, o: 43, p: 53, q: 14, r: 24, s: 34, t: 44, u: 54, v: 15, w: 25, x: 35, y: 45, z: 55};
  
  // Object for the decode method
  const squareDecode = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z" };

  // Main function
  function polybius(input, encode = true) { 
    // begin encode method
    if (encode) {
      // uses map to iterate over input and assign a value based on keys
    const matched = input.toLowerCase().split('').map((character) => {
      if(Object.keys(square).includes(character)) {
        return square[character];
      } else {
        return character;
      }
    });
      return matched.join('');
    }
    // begin decode method
    if (!encode) {
      let resultArray = [];
      // removes whitespaces and checks length of input string
      if (input.replace(/\s/g, "").length %2 !== 0) return false;
      // iterates over keys, seperates into pairs and adds their values to array
      for (let i = 0; i < input.length; i++) {
        let pairedValue = input[i] + input[i+1];
        if(Object.keys(squareDecode).includes(pairedValue)) {
          resultArray.push(squareDecode[pairedValue]);
          i++
        } else {
          resultArray.push(input[i]);
        }
      }
      return resultArray.join('');
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
