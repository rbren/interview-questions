module.exports = function(sentence) {
  let words = sentence.split(' ');
  let bestWord = '';
  let bestCount = 0;
  words.forEach(word => {
    let counts = {};
    for (let c = 0; c < word.length; ++c) {
      let letter = word.charAt(c);
      counts[letter] = counts[letter] || 0;
      counts[letter]++;
    }
    for (let letter in counts) {
      if (counts[letter] > bestCount) {
        bestWord = word;
        bestCount = counts[letter];
      }
    }
  })
  return bestWord;
}
