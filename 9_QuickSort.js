let arr = [1, 3, 4, 5, 2, 4, 8];
console.log(quickSort(0, arr.length - 1, arr));

function quickSort(low, high, arr) {
  let p_index = partition(low, high, arr);
  partition(low, p_index - 1, arr);
  partition(p_index + 1, high, arr);
}
function partition(low, high, arr) {
  let p_index = low;
  let pivot = high;
  for (let i = low; i < high; i++) {
    let temp = arr[i];
    arr[i] = arr[p_index];
    arr[p_index] = temp;
  }
}
