let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let n = matrix.length - 1;
console.log(n);
let m = n;

while (m >= 0) {
  let out = "";
  for (let i = 0; i <= n; i++) {
    out += matrix[i][m] + " ";
  }
  console.log(out);
  m--;
}
