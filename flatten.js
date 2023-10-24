let _ = require('lodash');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

let newArray = [];
const flatten = function(actual) {
  for (let char of actual) {
    if (Array.isArray(char)) {
      if (char.length > 0) {
        flatten(char);
      }
    } else {
      newArray.push(char);
    }
  }
  return newArray;
};

const eqArrays = function(actual, expected) {
  for (const char in actual) {
    if (actual[char] !== expected[char]) {
      return false;
    }
  }
  return true;
};
module.exports = flatten;
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3], true));