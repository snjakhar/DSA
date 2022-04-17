let arr = [1, 2, 3];
function p(l, r, arr) {
  if (l === r) {
    console.log(arr);
  }
  for (let i = l; i <= r; i++) {
    swap(i, l, arr);
    p(l+1,r, arr);
    swap(i, l, arr);
  }
}
console.log(p(0, 2, arr))
function swap(l, r, arr) { 
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r]=temp
}
