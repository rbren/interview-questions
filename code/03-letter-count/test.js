const expect = require('chai').expect;
const getBestWord = require('./answer');

let cases = [{
  input: "O Romeo, Romeo! Wherefore art thou Romeo?",
  output: "Wherefore",
}, {
  input: "Deny thy father and refuse thy name.",
  output: "refuse",
}, {
  input: "Shall I compare thee to a Summer's day?",
  output: "Shall",
}]


describe("Letter Count", () => {
  cases.forEach((c, idx) => {
    it('case ' + idx, () => {
      expect(getBestWord(c.input)).to.equal(c.output);
    });
  })
})
