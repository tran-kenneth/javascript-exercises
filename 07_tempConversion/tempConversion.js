const ftoc = function (tempInF) {
  return Math.round((10 * ((tempInF - 32) * 5)) / 9) / 10;
};

const ctof = function (tempInC) {
  return Math.round(10 * ((9 / 5) * tempInC + 32)) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
