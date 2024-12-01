//
const nums=[1,2,3,4]
// const nums = [2, 3, 4, 5, 6, 7, 8, 9];
const productExceptSelf = function (nums) {
    const left = []
    const right = []
    const output=[]
    let prev = 1;

    for (let i = 0; i < nums.length; i++) {
        left.push(prev)
        prev = prev * nums[i]
    }
    prev=1
    for (let i = nums.length - 1; i >= 0; i--) {
        right[i]=prev;
        prev = prev * nums[i]
    }
    for (let i=0;i<nums.length;i++){
        output.push(left[i]*right[i])
    }
    return output;

};

console.log(productExceptSelf(nums));