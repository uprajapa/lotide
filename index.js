const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const map = require('./map');
const isPalindrome = require('./palindrome');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  palindrome: isPalindrome,
  flatten: flatten,
  map: map,
  assertArraysEqual: assertArraysEqual
};