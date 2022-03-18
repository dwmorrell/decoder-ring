// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  // alphabet to decode or encode against
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  // main function
  function substitution(input, alphabet, encode = true) {

    // checking for exceptions and outlier conditions
    if (!alphabet || alphabet.length < 26) return false;
    let mySet = new Set(alphabet).size === alphabet.length;
    if (!mySet) return false;

    // encoding method
      if (encode) {
      const mapped = input.toLowerCase().split('').map((char) => {
        if (alpha.includes(char)) {
         let index = alpha.indexOf(char);
          return alphabet[index];
        } else {
          return char;
        }  
      });
      return mapped.join(''); 
    }

    // decoding method
    if (!encode) {
      const decodeMap = input.toLowerCase().split('').map((char) => {
        if (alphabet.includes(char)) {
          let index = alphabet.indexOf(char);
            return alpha[index];
        } else {
          return char;
        }
      });
      return decodeMap.join('');
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
