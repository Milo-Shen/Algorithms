// https://leetcode.cn/problems/replace-elements-with-greatest-element-on-right-side/

const replaceElements = function (arr) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i];
    arr[i] = max;
    max = Math.max(num, max);
  }

  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
