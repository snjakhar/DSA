let arr = [1, 2, 5, 4, 10, 2]
arr.sort((a, b) => { 
    return a - b;
})
let n = arr.length
console.log(findPeakElement())
function findPeakElement(){
    let low = 0;
    let high = arr.length-1;
    while(low < high){
        let mid = Math.floor(low + (high - low)/2);
        if (arr[mid] > arr[mid + 1]) high = mid;
        else{
            low = mid + 1;
        }
    }
    return low;
}