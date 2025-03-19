const removeFromArray = function (array, ...toremove) {
  return array.filter((elem) => !toremove.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
