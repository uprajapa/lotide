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

module.exports = eqArrays;