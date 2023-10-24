const eqArrays = function(actual, expected) {
  for (const char in actual) {
    if (Array.isArray(actual[char]) && Array.isArray(expected[char])) {
      if (actual[char].length !== expected[char].length) {
        return false;
      } else if (!eqArrays(actual[char], expected[char])) {
        return false;
      }
    } else if (actual[char] !== expected[char]) {
      return false;
    }
  }
  return true;
};

/* assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]) , false); */

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

module.exports = eqArrays;