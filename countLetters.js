/* eslint-disable no-undef */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input) {
  let output = {};
  for (item of input) {
    if (item === ' ') {
      continue;
    } else if (output[item]) {
      output[item] += 1;
    } else {
      output[item] = 1;
    }

  }
  return output;
};

const sentence = "hey how are you";

const resultMain = countLetters(sentence);

console.log(resultMain);


