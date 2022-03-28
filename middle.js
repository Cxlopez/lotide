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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let output = [];
  if (array.length <= 2) {
    return output;
  } else if (array.length % 2 === 0) {
    output.push(array[(array.length / 2 - 1)]);
    output.push(array[array.length / 2]);
  } else if (!array.length % 2 === 0) {
    output.push(array[((array.length - 1) / 2)]);
  }
  
  return output;
};


console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6,7,8,9,10]));