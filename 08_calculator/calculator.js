const add = function () {
  return arguments[0] + arguments[1];
};

const subtract = function () {
  return arguments[0] - arguments[1];
};

const sum = function (nums) {
  let sum = 0;
  nums.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (nums) {
  let mul = 1;
  nums.forEach((element) => {
    mul *= element;
  });
  return mul;
};

const power = function (base, power) {
  let ans = 1;
  for (let i = 0; i < power; i++) {
    ans *= base;
  }
  return ans;
};

const factorial = function (num) {
  if (num == 0) return 1;
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
