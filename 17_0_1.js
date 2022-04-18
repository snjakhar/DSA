// let arr = [1, 1, 1, 0, 0, 2, 0];
// let zeroCount = 0,
//   oneCount = 0,
//   twoCount = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) zeroCount++;
//   else if (arr[i] === 1) oneCount++;
//   else twoCount++;
// }
// arr = [];
// while (zeroCount) {
//   arr.push(0);
//   zeroCount--;
// }
// while (oneCount) {
//   arr.push(1);
//   oneCount--;
// }
// while (twoCount) {
//   arr.push(2);
//   twoCount--;
// }
// console.log(arr)

// anOTHER apPROACH

let arr = [0, 1, 2, 1, 0, 1, 2, 2, 0];
let n = arr.length;
let low = 0;
let high = n - 1;
let mid = 0;
while (l <= r) {
  switch (arr[l]) {
    case 0:
      swap(l, m);
      low++;
      mid++;
      break;
    case 1:
      mid++;
      break;
    case 2:
      swap(mid, high);
      r--;
      break;
  }
}
