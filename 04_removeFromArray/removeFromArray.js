const removeFromArray = function (array, ...args) {
  args.forEach((elementToRemove) => {
    if (array.includes(elementToRemove)) {
      array = array.filter((item) => item !== elementToRemove);
    }
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
