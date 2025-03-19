const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";

  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);
  let res = start;
  for (let i = start + 1; i <= end; i++) {
    res += i;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
