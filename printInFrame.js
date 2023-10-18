const printInFrame = function(list) {
  list = list.split(' ');
  const longest = longestStr(list).length;
  const border = repeat('*', longest + 3);

  console.log(border);
  for (const word of list) {
    console.log(`* ${word}${repeat(' ', longest - word.length)}*`);
  }
  console.log(border);
};

const repeat = function(str, times) {
  let result = str;

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
};

const longestStr = function(list) {
  let longest = "";

  for (const str of list) {
    if (longest.length < str.length) {
      longest = str;
    }
  }
  return longest;
};

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');