function gcd(m, n) {
  if (n % m === 0) return m;
  return gcd(n % m, m);
}
console.log(gcd(100000,1000));
