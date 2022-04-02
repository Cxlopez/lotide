
const eqArrays = function(arr1, arr2,) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
   
};


const eqObjects = function(object1, object2) {
  let objectKey1 = Object.keys(object1);
  let objectKey2 = Object.keys(object2);
  if (objectKey1.length !== objectKey2.length) {
    return false;
  } else {
    for (let item in object1) {
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        if (eqArrays(object1[item], object2[item]) === false) {
          return false;
        }
      } else {
        if (object1[item] !== object2[item]) {
          return false;
        }
      }
    }
    return true;
  }
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
