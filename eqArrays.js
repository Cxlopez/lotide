const assertEqual = function(actual, expected) {
  
  
};

const eqArrays = function(arr1, arr2,) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(true);
  } else {
    console.log(false);
  }
  /* if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }*/
  
};

eqArrays([1, 2, 3], [1, 2, 3]);// => true
eqArrays([1, 2, 3], [3, 2, 1]);// => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]);// => true
eqArrays(["1", "2", "3"], ["1", "2", 3]);// => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

