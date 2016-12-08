const expect = require('chai').expect;
const lcs = require('./answer');

const cases = [{
  input: ["ABCD", "ABCB"],
  output: "ABC",
}, {
  input: ["", "ABCD"],
  output: "",
}, {
  input: ["ABCD", "EFGH"],
  output: "",
}, {
  input: ["ABRACADABRA", "CADENCE"],
  output: "CAD",
}, {
  input: ["CADENCE", "ABRACADABRA"],
  output: "CAD",
}, {
  input: ["ABRACADABRA", "DABRA"],
  output: "DABRA",
}]

describe("Longest Common Subsequence", () => {
  cases.forEach((c, idx) => {
    it('case ' + idx, () => {
      expect(lcs(c.input[0], c.input[1])).to.equal(c.output);
    });
  })
})
