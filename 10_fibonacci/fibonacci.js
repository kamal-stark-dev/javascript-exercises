const fibonacci = function (num) {
  num = parseInt(num);

  // edge cases
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;

  let prev = 1,
    current = 1;

  for (let i = 2; i < num; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
