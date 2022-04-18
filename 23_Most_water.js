let arr = [3, 2, 0, 4, 6]
let n = arr.length;
let left = []
left.push(arr[0])
for (let i = 1; i < n; i++) { 
    if (arr[i] > left[i - 1]) left[i] = arr[i]
    else left[i]=left[i-1]
}
let right = []
right[n - 1] = arr[n - 1]
for (let i = n - 2; i >= 0; i--) { 
    if (arr[i] > right[i + 1]) right[i] = arr[i]
    else right[i]=right[i+1]
}
let sum=0
for (let i = 0; i < n; i++){
    sum+=Math.min(left[i],right[i])-arr[i]
}
console.log(sum)