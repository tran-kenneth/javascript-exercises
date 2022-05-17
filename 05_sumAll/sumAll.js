const sumAll = function (num1, num2) {
  if (
    typeof num1 != "number" ||
    typeof num2 != "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  let sum = 0;
  let lowerBound = num1 > num2 ? num2 : num1;
  let upperBound = num1 > num2 ? num1 : num2;

  for (let i = lowerBound; i <= upperBound; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
