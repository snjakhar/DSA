let arr = [2, 7, 11, 15], k = 11;

let left = 0;
let right = arr.length - 1;
while (left < right) { 
    if (arr[left] + arr[right] === k) { 
        console.log(left + " " + right);
        break;
    }
    else if (arr[left] + arr[right] > k) right--
    else left++
}