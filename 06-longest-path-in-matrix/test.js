const expect = require('chai').expect;
const longestPath = require('./answer');
const cases = [{
  input: [
    [6, 5, 3],
    [2, 3, 4],
    [5, 4, 7],
  ],
  output: [2,3,4,5],
}, {
  input: [
    [1]
  ],
  output: [1],
}, {
  input: [[]],
  output: [],
}, {
  input: [
    [1, 2, 3],
    [6, 5, 4],
    [7, 8, 9],
  ],
  output: [1,2,3,4,5,6,7,8,9],
}, {
  input: [
    [0, 0, 0, 9, 10],
    [0, 0, 0, 8, 11],
    [0, 0, 6, 7,  0],
    [0, 0, 5, 4,  3],
    [0, 0, 0, 0,  2],
  ],
  output: [2,3,4,5,6,7,8,9,10,11],
}]

describe('Longest Path in Matrix', () => {
  cases.forEach((c, idx) => {
    it('case ' + idx, () => {
      expect(longestPath(c.input)).to.deep.equal(c.output);
    })
  })
})
