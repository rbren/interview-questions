const expect = require('chai').expect;
const countTriplets = require('./answer');
const cases = [{
  input: {
    list: [3, -2, 1, 3],
    target: 5,
  },
  output: 3,
}, {
  input: {
    list: [1, 2],
    target: 1,
  },
  output: 0,
}, {
  input: {
    list: [1, 2, 3, 4],
    target: 0,
  },
  output: 0,
}, {
  input: {
    list: [1, 2, 3, 4],
    target: 10,
  },
  output: 4,
}]

describe('Reverse Words', () => {
  cases.forEach((c, idx) => {
    it('case ' + idx, () => {
      expect(countTriplets(c.input.list, c.input.target)).to.equal(c.output);
    })
  })
})
