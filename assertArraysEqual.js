const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');



const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertArraysEqual;