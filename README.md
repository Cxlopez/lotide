# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cxlopez/lotide`

**Require it:**

`const _ = require('@cxlopez/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Function that asserts if two arrays are equal.
* `assertEqual`: Function that asserts if two values are equal.
* `assertObjectsEqual`: Function that asserts if two objects are equal.
* `countLetters`: Function that returns counts of each letter of a string.
* `countOnly`: Function that takes in items and returns the selected itmes.
* `eqArrays`: Function that compares two arrays.
* `eqObjects`: Function that compares two objects.
* `findKey`: Function that returns the first key which returns a truthy value.
* `findKeyByValue`: Function that searches a key on an object and returns a value that matches given value.
* `flatten`: Function that flattens an array of arrays into a single-level array.
* `head`: Function that gets the first element from the array.
* `index`: List of all the functions within an object.
* `letterPositions`: Function that returns index of a string where a specific letter is found.
* `map`: Function that makes a new array with the results from a function on each element in the array.
* `middle`: Function that returns middle element of an array.
* `tail`: Function that keeps every element except the head of the arrray.
* `takeUntil`: Function that returns a slice of the array with elements taken from the beginning.
* `without`: Function that removes elements from the array.