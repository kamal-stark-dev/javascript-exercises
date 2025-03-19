const repeatString = function () {
  if (arguments[1] < 0) return "ERROR";
  if (arguments[1] == 0) return "";

  let res = arguments[0];
  for (let i = 1; i < arguments[1]; i++) {
    res += arguments[0];
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
