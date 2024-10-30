function sort(nums) {
  let one = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      let temp = nums[i];
      nums[i] = nums[one];
      nums[one] = temp;
      one++;
    }
  }
  return nums;
}
console.log(sort([1, 0, 1, 1, 0, 0, 1, 0]));
