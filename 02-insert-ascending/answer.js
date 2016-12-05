module.exports = function(diffs, numToInsert) {
  let currentNum = 0;
  for (let i = 0; i < diffs.length; ++i) {
    currentNum += diffs[i];
    if (numToInsert < currentNum) {
      diffs.splice(i, 0, numToInsert - (currentNum - diffs[i]));
      diffs[i+1] -= diffs[i];
      return diffs;
    }
  }
  diffs.push(numToInsert - currentNum);
  return diffs;
}
