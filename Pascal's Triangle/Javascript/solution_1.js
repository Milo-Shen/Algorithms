// https://leetcode.cn/problems/pascals-triangle/

function generate(numRows) {
  let result = [];
  // 先构建数组

  for (let i = 1; i <= numRows; i++) {
    let arr = Array(i).fill(0);
    arr[0] = arr[i - 1] = 1;

    if (i >= 3) {
      for (let j = 1; j < i - 1; j++) {
        arr[j] = result[i - 2][j - 1] + result[i - 2][j];
      }
    }

    result.push(arr);
  }

  return result;
}

console.log(generate(5));
