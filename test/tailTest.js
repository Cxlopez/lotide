const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const noWords = [];
const oneWord = ["hey"];


describe("#tail", () => {
  it("returns 'Lighthouse, Labs' for 'Yo Yo, Lighthouse, Labs'", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns 'dog, cat, cat' for dog, dog, cat, cat'", () => {
    assert.deepEqual(tail(["dog", "dog", "cat", "cat"]), ["dog", "cat", "cat"]);
  });
  it("returns '[2, 3]' for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});

// tail(noWords);
// tail(words);
// assertEqual(words.length, 3);
// tail(oneWord);
// assertEqual(oneWord.length, 2);
// assertEqual(tail(words), ["Lighthouse", "Labs"]);