var longestCommonSubstring = module.exports = function(word1, word2) {
  let longer = word1.length > word2.length ? word1 : word2;
  let shorter = longer === word1 ? word2 : word1;
  let length = shorter.length;
  while (length > 0) {
    for (let startIdx = 0; startIdx + length <= shorter.length; ++startIdx) {
      let substring = shorter.substring(startIdx, startIdx + length);
      if (longer.indexOf(substring) !== -1) return substring;
    }
    length--;
  }
  return '';
}
module.exports = longestCommonSubstring;
