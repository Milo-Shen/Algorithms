// https://leetcode.cn/problems/container-with-most-water/

const maxArea = function (height) {
  let max = 0;

  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    let area = (end - start) * Math.min(height[start], height[end]);
    max = Math.max(max, area);

    if (height[start] > height[end]) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
