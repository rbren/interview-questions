const expect = require('chai').expect;
const reverseWords = require('./answer');
const cases = [{
  input: "Shall I compare thee to a summer's day?",
  output: "llahS I erapmoc eeht ot a s'remmus ?yad",
}, {
  input: " ",
  output: " ",
}, {
  input: "",
  output: "",
}, {
  input: "foo",
  output: "oof",
}, {
  input: "tacocat",
  output: "tacocat",
}, {
  input: " foo bar ",
  output: " oof rab ",
}]

describe('Reverse Words', () => {
  cases.forEach((c, idx) => {
    it('case ' + idx, () => {
      expect(reverseWords(c.input)).to.equal(c.output);
    })
  })
})
