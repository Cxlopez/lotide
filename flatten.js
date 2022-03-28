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

const flatten = function(array) {
  let flatArr = [];
  for (let element of array) {
    //console.log(element);
    if (Array.isArray(element)) {
      for (let element2 of element) {
        //console.log(element2);
        flatArr.push(element2);
      }
    } else {
      flatArr.push(element);
    }
  }
  console.log(flatArr);
};


flatten([1, 2, [3, 4], 5, [6]]);// => [1, 2, 3, 4, 5, 6]