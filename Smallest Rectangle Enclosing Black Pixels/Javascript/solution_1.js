// https://leetcode.cn/problems/smallest-rectangle-enclosing-black-pixels/
// https://www.lintcode.com/problem/600/

const minArea = function (image, x, y) {
  if (!image || !image.length) {
    return 0;
  }

  if (!image[0] || !image[0].length) {
    return 0;
  }

  const n = image.length;
  const m = image[0].length;

  let left = find_first_row(image, 0, y, n);
  let right = find_last_row(image, y, m - 1, n);
  let up = find_first_column(image, 0, x, m);
  let down = find_last_column(image, x, n - 1, m);

  return (right - left + 1) * (down - up + 1);
};

const find_last_row = function (image, start, end, iter) {
  let max = start;
  for (let i = 0; i < iter; i++) {
    for (let j = end; j >= start; j--) {
      if (image[i][j] === '1') {
        max = Math.max(max, j);
      }
    }
  }
  return max;
};

const find_last_column = function (image, start, end, iter) {
  let max = start;
  for (let i = 0; i < iter; i++) {
    for (let j = end; j >= start; j--) {
      if (image[j][i] === '1') {
        max = Math.max(max, j);
      }
    }
  }
  return max;
};

const find_first_row = function (image, start, end, iter) {
  let min = end;
  for (let i = 0; i < iter; i++) {
    for (let j = start; j <= end; j++) {
      if (image[i][j] === '1') {
        min = Math.min(min, j);
      }
    }
  }
  return min;
};

const find_first_column = function (image, start, end, iter) {
  let min = end;
  for (let i = 0; i < iter; i++) {
    for (let j = start; j <= end; j++) {
      if (image[j][i] === '1') {
        min = Math.min(min, j);
      }
    }
  }
  return min;
};

const image = [['0', '1']];
const x = 0;
const y = 1;
console.log(minArea(image, x, y));
