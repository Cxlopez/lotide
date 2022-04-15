const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(["Naruto"], ["Sasuke"]);
assertArraysEqual(["I am a decently long sentence"], ["I'm not"]);
assertArraysEqual(["hello hello hello"], ["hello hello hello"]);
assertArraysEqual(["dog"], ["dog"], ["dog"]);
assertArraysEqual(["cat"], ["fish"], ["cat"]);