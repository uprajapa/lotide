const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it(`returns tail.length = 2 for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(result.length, 2);
  });
  it(`returns "Lighthouse" for tail()[0]`, () => {
    assert.strictEqual("Lighthouse", result[0]); 
  });
  it(`returns "Labs" for tail()[0]`, () => {
    assert.strictEqual("Labs", result[1]); 
  });
});