const fibonacci = function (num) {
  if (typeof num == String) num = Number(num);
  if (num < 1) return "OOPS";

  const fibSeq = [1, 1];
  if (num > 2) {
    for (let i = 0; i <= num - 3; i++) {
      fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    }
  }

  return fibSeq[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
