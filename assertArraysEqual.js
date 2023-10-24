const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected, bool) {
  if (eqArrays(actual, expected) === bool) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;