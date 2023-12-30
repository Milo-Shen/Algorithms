// https://leetcode.cn/problems/trapping-rain-water/
const trap = function (height) {
  let total = 0;
  let i = 0;

  while (height[i] === 0) {
    i++;
  }

  let j = i + 1;

  while (j < height.length) {
    if (height[j] >= height[i]) {
      let max_h = Math.min(height[i], height[j]);
      for (let m = i + 1; m < j; m++) {
        total = total + max_h - height[m];
      }
      i = j;
    }
    j++;
  }

  let peak = i;
  i = height.length - 1;

  while (height[i] === 0) {
    i--;
  }

  j = i - 1;

  while (j >= peak) {
    if (height[j] >= height[i]) {
      let max_h = Math.min(height[i], height[j]);
      for (let m = i - 1; m > j; m--) {
        total = total + max_h - height[m];
      }
      i = j;
    }
    j--;
  }

  return total;
};

console.log(trap([4, 2, 3]));
