const words = ["Yo Yo", "Lighthouse", "Labs"];
const noWords = [];
const oneWord = ["hey"];

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(arr) {
  console.log(arr.slice(1));
};


tail(noWords);
tail(words);
assertEqual(words.length, 3);
tail(oneWord);
assertEqual(oneWord.length, 2);
assertEqual(tail(words), ["Lighthouse", "Labs"]);