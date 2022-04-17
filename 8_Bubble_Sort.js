let nums = [2, 3, 4, 5, 0, -1, 6, 12, 3, 5, 6];
for (let i = 0; i < nums.length - 1; i++) {
  for (let j = 0; j < nums.length - i; j++) {
    if (nums[j] < nums[j + 1]) {
      let temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
    }
  }
}
console.log(nums);
