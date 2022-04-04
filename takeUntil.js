const eqArrays = function(arr1, arr2,) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
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






const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      array.splice(i);
      return array;
    }
  }
};




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);