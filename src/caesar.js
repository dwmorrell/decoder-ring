// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // helper function to get unicode, returns unicode and ignores special characters.
  function getUnicode (char) {
    return char.map((character) => {
      const unicodeChar = character.charCodeAt();
       if (unicodeChar >= 97 && unicodeChar <= 122) {
         return unicodeChar;
       } else {
         return character;
       }
    }); 
  }
  

  function caesar(input, shift, encode = true) {
    // check for outlier conditions
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    
    // if encode is false it will flip shift 
    if (encode === false) {
      shift = shift * -1;
    }
    
    // break string into array and convert to lowercase
    const splitWords = input.toLowerCase().split('');
    
    // calls getUnicode helper function to assign unicode number to strings
    const unicodeWords = getUnicode(splitWords);
    
    // shifts the unicode the appropriate number of places
    let shiftWords = unicodeWords.map((char) => {
      if (typeof char === "number") {
        return char + shift;
      } else {
        return char;
      }
    });
    
    // if unicode extends past "a" or "z" then it shifts the appropriate number of characters to loop back on itself, ignoring spaces and special characters.
    const outsideChars = shiftWords.map((char) => {
      if (typeof char === "number") {
        if (char < 97) {
          return char +26;
        } else if (char > 122) {
          return char -26;
        }
      }
      return char;
    });
    
    // converts the outsideChars array from unicode back to strings, ignoring spacess and special characters.
    const outputArray = outsideChars.map((number) => {
      if (typeof number === "number") {
        return String.fromCharCode(number);
      } else {
        return number;
      }
    });
    
    return outputArray.join("");
    

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
