const reverseString = function (string) {
  let reversedCharacterArray = [...string].reverse();
  let reversedString = "";
  reversedCharacterArray.forEach((char) => {
    reversedString += char;
  });
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
