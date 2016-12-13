module.exports = n => {
  let primes = [];
  let cur = 2;
  while(primes.length < n) {
    let isPrime = true;
    primes.forEach(prime => {
      if (cur % prime === 0) {
        isPrime = false;
      }
    });
    if (isPrime) primes.push(cur);
    ++cur;
  }
  return primes;
}
