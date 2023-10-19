let _ = require('lodash');

const takeUntil = (array, callback) => {
  return _.takeWhile(array, callback);
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x > 0);
// console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x !== ",");
// console.log(results2);

const assertArraysEqual = function(actual, expected, bool) {
  if (eqArrays(actual, expected) === bool) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(actual, expected) {
  for (const char in actual) {
    if (actual[char] !== expected[char]) {
      return false;
    }
  }
  return true;
};

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ], true));
console.log(assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ], true));