const expect = require('chai').expect;
const isPalindrome = require('./answer');

const cases = [{
  input: 7,
  output: true,
}, {
  input: 6,
  output: false,
}, {
  input: 32,
  output: false,
}, {
  input: 5,
  output: true,
}, {
  input: 0,
  output: true,
}, {
  input: 21,
  output: true,
}, {
  input: 20,
  output: false,
}]

describe("Binary Palindrome", () => {
  cases.forEach((c, idx) => {
    it('case ' + idx, () => {
      expect(isPalindrome(c.input)).to.equal(c.output);
    });
  })
})
