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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3], true));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3], true));