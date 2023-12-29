// https://leetcode.cn/problems/trapping-rain-water/
const trap = function (height) {
  let i = 0;
  let j = 0;

  while (height[i] === 0) {
    i++;
  }

  console.log(i);
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
