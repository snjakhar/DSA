//Check whether two given strings X and Y of sizes N and M respectively are anagram of each other or not.
let N = 4, X = 'abcd', M = 4, Y = 'dacb';
X = X.split('').sort().join("");
Y = Y.split('').sort().join("");
console.log(X===Y)
