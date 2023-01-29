// https://leetcode.cn/problems/container-with-most-water/

const maxArea = function (height) {
  let len = height.length;
  let max = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let area = (j - i) * Math.min(height[i], height[j]);
      max = Math.max(max, area);
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
