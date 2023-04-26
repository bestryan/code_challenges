// binary search
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);
    if (nums[midIndex] === target) {
      return midIndex;
    }
    if (nums[midIndex] < target) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }
  return -1;
};
