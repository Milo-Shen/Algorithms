// https://www.lintcode.com/problem/183/

function woodCut(L, k) {
  if (!L || !L.length) {
    return 0;
  }

  let wood_count_arr = [];
  let wood_len = 1;
  let wood_count = 0;

  while ((wood_count = cal_wood_count(L, wood_len)) >= 1) {
    wood_count_arr.push({ wood_len, wood_count });
    wood_len++;
  }

  return find_upper_farthest(wood_count_arr, k);
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

/**
 * function: 找到最右边 >= target 的元素
 * @param A
 * @param target
 * @returns {number|*}
 */
function find_upper_farthest(A, target) {
  let start = 0;
  let end = A.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (A[mid].wood_count > target) {
      start = mid;
    }
    if (A[mid].wood_count === target) {
      start = mid;
    }
    if (A[mid].wood_count < target) {
      end = mid;
    }
  }

  if (A[end].wood_count >= target) {
    return A[end].wood_len;
  }

  if (A[start].wood_count >= target) {
    return A[start].wood_len;
  }

  return 0;
}

console.log(woodCut([232, 124, 456], 7));
