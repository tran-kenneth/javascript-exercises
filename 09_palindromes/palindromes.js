const palindromes = function (str) {
  const alphaChars = str.match(/[a-z]+/gi);
  let recombineString = "";

  alphaChars.forEach(
    (matchedStr) => (recombineString += matchedStr.toLowerCase())
  );

  for (let i = 0; i < Math.floor(recombineString.length / 2); i++) {
    if (recombineString[i] != recombineString[recombineString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
