let _ = require('lodash');

// const assertArraysEqual = function(actual, expected, bool) {
//   if (eqArrays(actual, expected) === bool) {
//     return `✅ Assertion Passed: ${actual} === ${expected}`;
//   } else {
//     return `🛑 Assertion Failed: ${actual} !== ${expected}`;
//   }
// };
/* 
const eqArrays = function(actual, expected) {
  for (const char in actual) {
    if (actual[char] !== expected[char]) {
      return false;
    }
  }
  return true;
}; */

const middle = function(array) {
  let newArray = [];
  const midIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    newArray.push(array[midIndex - 1]);
    newArray.push(array[midIndex]);
  } else if (array.length === 1 || array.length === 2) {
    return newArray;
  } else {
    newArray.push(array[midIndex]);
  }
  return newArray;
};

module.exports = middle;
