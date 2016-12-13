let expect = require('chai').expect;

const testCases = [{
  diffs: [1, 1, 2, 4],
  num: 7,
  output: [1, 1, 2, 3, 1],
}, {
  diffs: [1, 1, 2, 4],
  num: -3,
  output: [-3, 4, 1, 2, 4],
}, {
  diffs: [1, 4, 3, 1],
  num: 7,
  output: [1, 4, 2, 1, 1],
}, {
  diffs: [1, 4, 3, 1],
  num: 20,
  output: [1, 4, 3, 1, 11],
}, {
  diffs: [1, 4, 3, 1],
  num: 0,
  output: [0, 1, 4, 3, 1],
}, {
  diffs: [1, 4, 3, 1],
  num: 1,
  output: [1, 0, 4, 3, 1],
}, {
  diffs: [],
  num: 7,
  output: [7],
}]

describe('Insert Ascending', () => {
  testCases.forEach((c, idx) => {
    it('case ' + idx, () => {
      let answer = require('./answer')(c.diffs, c.num);
      expect(answer).to.deep.equal(c.output);
    });
  })
})
