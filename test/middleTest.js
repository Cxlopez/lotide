const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


describe("#middle", () => {
  it("returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]));
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
  });
});
// console.log(middle([1,2]));
// console.log(middle([1,2,3]));
// console.log(middle([1,2,3,4,5]));
// console.log(middle([1,2,3,4,5,6,7,8,9,10]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]));