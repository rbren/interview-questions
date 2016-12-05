module.exports = function sort(nums) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
       if (nums[i] > nums[j]) {
         let hold = nums[i];
         nums[i] = nums[j];
         nums[j] = hold;
       }
    }
  }
  return nums;
}
