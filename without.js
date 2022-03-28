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

const without = function(source, itemsToRemove) {
  let filtered = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      filtered.push(item);
    }
  }
  console.log(filtered);
};



const words = ["hello", "world", "lighthouse",];
without(words, ["lighthouse", "world", "hello"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
without(["1", "2", "3"], ["1", 2, "3"]);
without([1, 2, 3], [1]);