let expect = require('chai').expect;

let cases = module.exports = [{
  input: [10, 7, 19, 22, 7, 7, 3],
  output: [3, 7, 7, 7, 10, 19, 22],
}, {
  input: [1,2,3,4],
  output: [1,2,3,4],
}, {
  input: [4,3,2,1],
  output: [1,2,3,4],
}, {
  input: [0, 5, -5],
  output: [-5, 0, 5],
}, {
  input: [],
  output: [],
}]

describe('Sort', function() {
  cases.forEach((c, idx) => {
    it('case ' + idx, () => {
      let answer = require('./answer')(c.input);
      expect(answer).to.deep.equal(c.output);
    });
  })
});
