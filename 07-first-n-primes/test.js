const expect = require('chai').expect;
const firstNPrimes = require('./answer');
const cases = [{
  input: 3,
  output: [2,3,5],
}, {
  input: 0,
  output: [],
}, {
  input: -1,
  output: [],
}, {
  input: 10,
  output: [2,3,5,7,11,13,17,19,23,29],
}]

describe('First n Primes', () => {
  cases.forEach((c, idx) => {
    it('case ' + idx, () => {
      expect(firstNPrimes(c.input)).to.deep.equal(c.output);
    })
  })
})
