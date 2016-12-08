module.exports = function(num) {
  let numBits = 0;
  while (num >= Math.pow(2, numBits)) {
    ++numBits;
  }
  function getNthBit(n) {
    return (num % Math.pow(2, n + 1) - num % Math.pow(2, n)) / Math.pow(2, n);
  }
  for (let bit = 0; bit < Math.ceil(numBits / 2); ++bit) {
    if (getNthBit(bit) !== getNthBit(numBits - bit - 1)) return false;
  }
  return true;
}
