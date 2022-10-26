// https://leetcode.cn/problems/element-appearing-more-than-25-in-sorted-array/

const findSpecialInteger = function (arr) {
  let len = arr.length;

  if (len === 1) {
    return arr[0];
  }

  let flag = ~~(len * 0.25);
  let map = new Map();

  for (let num of arr) {
    if (map.has(num)) {
      let count = map.get(num) + 1;

      if (count > flag) {
        return num;
      }

      map.set(num, count);
    } else {
      map.set(num, 1);
    }
  }

  return -1;
};

console.log(findSpecialInteger([1]));
