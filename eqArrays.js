const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  let sameLength = arr1.length === arr2.length;
  let sameResult = true;
  // eslint-disable-next-line no-undef
  for (i = 0; i < arr1.length; i++) {
    // eslint-disable-next-line no-undef
    if (arr1[i] !== arr2[i]) {
      sameResult = false;
    }
  }

  if (sameResult && sameLength) {
    return true;
  } else {
    return false;
  }
};


module.exports = eqArrays;