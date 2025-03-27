/*
function isValidChar(char) {
  return /[a-zA-Z0-9]/.test(char);
}

function lower(str) {
  return str.toLowerCase();
}
*/
const isValidChar = (char) => /[a-zA-Z0-9]/.test(char);
const lower = (str) => str.toLowerCase();

const palindromes = function (str) {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    while (left < right && !isValidChar(str[left])) left++;
    while (left < right && !isValidChar(str[right])) right--;

    if (lower(str[left]) !== lower(str[right])) return false;
    left++;
    right--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
