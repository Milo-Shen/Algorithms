// https://leetcode.cn/problems/trapping-rain-water/
const trap = function (height) {
  let arr_len = height.length;
  let total = 0;
  let i = 0;

  while (i < arr_len && height[i] === 0) {
    i++;
  }

  let j = i + 1;

  while (j < arr_len) {
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
  i = arr_len - 1;

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
