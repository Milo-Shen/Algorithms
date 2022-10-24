// https://leetcode.cn/problems/relative-sort-array/

const relativeSortArray = function (arr1, arr2) {
  let remain = [];
  let result = [];
  let pos_map = new Map();
  let count = Array(arr2.length).fill(0);

  for (let i = 0; i < arr2.length; i++) {
    pos_map.set(arr2[i], i);
  }

  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];

    if (pos_map.has(num)) {
      count[pos_map.get(num)]++;
    } else {
      remain.push(num);
    }
  }

  remain.sort((a, b) => a - b);

  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      result.push(arr2[i]);
    }
  }

  for (let i = 0; i < remain.length; i++) {
    result.push(remain[i]);
  }

  return result;
};

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];

console.log(relativeSortArray(arr1, arr2));
