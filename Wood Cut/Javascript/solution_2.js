// https://www.lintcode.com/problem/183/
// 思考:
//  1. 不要一开始算出所有的结果，而是二分的时候在过程中算
//  2. 二分的要求，最重要的还是确定左右边界，所以这边最重要的是确定右边界

function woodCut(L, k) {
  if (!L || !L.length) {
    return 0;
  }

  let max_1 = L[0];
  let total = 0;
  for (let i = 0, len = L.length; i < len; i++) {
    total += L[i];
    if (L[i] > max_1) {
      max_1 = L[i];
    }
  }

  let max_2 = ~~(total / k);
  let end = max_1 < max_2 ? max_1 : max_2;

  return find_upper_farthest(L, 1, end, k);
}

/**
 * function: 找到最右边 >= target 的元素
 * @param A
 * @param left
 * @param right
 * @param target
 * @returns {number|*}
 */
function find_upper_farthest(A, left, right, target) {
  let start = left;
  let end = right;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    let wood_count = cal_wood_count(A, mid);

    if (wood_count > target) {
      start = mid;
    }
    if (wood_count === target) {
      start = mid;
    }
    if (wood_count < target) {
      end = mid;
    }
  }

  if (cal_wood_count(A, end) >= target) {
    return end;
  }

  if (cal_wood_count(A, start) >= target) {
    return start;
  }

  return 0;
}

/**
 * function: 计算 wood 的长度
 * @param L
 * @param length
 * @returns {number}
 */
function cal_wood_count(L, length) {
  let total = 0;
  for (let i = 0, len = L.length; i < len; i++) {
    total += ~~(L[i] / length);
  }
  return total;
}

console.log(woodCut([232, 124, 456], 7));
