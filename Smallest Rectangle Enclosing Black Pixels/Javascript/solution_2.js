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

  let left = find_first(image, 0, y, check_column);
  let right = find_last(image, y, m - 1, check_column);
  let up = find_first(image, 0, x, check_row);
  let down = find_last(image, x, n - 1, check_row);

  return (right - left + 1) * (down - up + 1);
};

function find_first(image, start, end, check_func) {
  while (start + 1 < end) {
    let mid = start + ~~((end - start) / 2);
    if (check_func(image, mid)) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (check_func(image, start)) {
    return start;
  }

  return end;
}

function find_last(image, start, end, check_func) {
  while (start + 1 < end) {
    let mid = start + ~~((end - start) / 2);
    if (check_func(image, mid)) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (check_func(image, end)) {
    return end;
  }

  return start;
}

function check_column(image, col) {
  for (let i = 0; i < image.length; i++) {
    if (image[i][col] === '1') {
      return true;
    }
  }

  return false;
}

function check_row(image, row) {
  for (let j = 0; j < image[0].length; j++) {
    if (image[row][j] === '1') {
      return true;
    }
  }

  return false;
}

const image = [['0', '1']];
const x = 0;
const y = 1;
console.log(minArea(image, x, y));
