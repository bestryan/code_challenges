console.log('100 day coding challenge');

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let currMinHeight = Math.min(height[left], height[right]);
    let currWidth = right - left;
    maxArea = Math.max(maxArea, currMinHeight * currWidth);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
