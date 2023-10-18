let _ = require('lodash');

const without = function(source, itemsToRemove) {
  for (const char in itemsToRemove) {
    for (const ch in source) {
      if (itemsToRemove[char] === source[ch]) {
        source.splice(ch, 1);
      }
    }
  }
  return source;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(source, itemsToRemove) {
  for (const char in source) {
    if (source[char] !== itemsToRemove[char]) {
      return false;
    }
  }
  return true;
};

console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));
