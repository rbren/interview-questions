const naiveAnswer = (list, target) => {
  let numTriplets = 0;
  for (let i = 0; i < list.length; ++i) {
    for (let j = i + 1; j < list.length; ++j) {
      for (let k = j + 1; k < list.length; ++k) {
        if (list[i] + list[j] + list[k] <= target) {
          ++numTriplets;
        }
      }
    }
  }
  return numTriplets;
}

const betterAnswer = (list, target) => {
  list.sort();
  let numTriplets = 0;
  for (let i = 0; i < list.length; ++i) {
    let k = list.length - 1;
    for (let j = i + 1; j < k;) {
      let sum = list[i] + list[j] + list[k];
      if (sum <= target) {
        numTriplets += k - j;
        ++j;
      } else {
        --k;
      }
    }
  }
  return numTriplets;
}


module.exports = betterAnswer;
