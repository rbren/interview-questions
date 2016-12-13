module.exports = sentence => {
  let chars = sentence.split("");
  let curWord = '';
  for (let i = 0; i <= chars.length; ++i) {
    if (chars[i] === ' ' || i === chars.length) {
      for (let j = 0; j < curWord.length; ++j) {
        chars[i - j - 1] = curWord.charAt(j);
      }
      curWord = '';
    } else {
      curWord += chars[i];
    }
  }
  return chars.join('');
}
