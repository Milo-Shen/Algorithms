// https://leetcode-cn.com/problems/find-k-closest-elements/

function findClosestElements(A, target, k) {
  let right = findUpperClosest(A, target);
  let left = right - 1;

  // 两个指针从中间往两边扩展, 依次找到最接近的 k 个数
  let result = [];
  for (let i = 0; i < k; i++) {
    if (isLeftCloser(A, target, left, right)) {
      result.push(A[left]);
      left--;
    } else {
      result.push(A[right]);
      right++;
    }
  }

  return result.sort((a, b) => a - b);
}

/**
 * function: 找到最左边 >= target 的元素
 * @param A
 * @param target
 * @returns {number|*}
 */
function findUpperClosest(A, target) {
  let start = 0;
  let end = A.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    // 如果 A[mid] >= target, mid 复合条件向左边去寻找
    if (A[mid] > target) {
      end = mid;
    }
    if (A[mid] === target) {
      end = mid;
    }
    if (A[mid] < target) {
      // 如果 mid < target, >= target 的元素在右边，丢掉左边
      start = mid;
    }
  }

  // 因为需要找到最左数，所以这里需要先判断 start
  if (A[start] >= target) {
    return start;
  }

  // 如果 start 不行, 再判断 end
  if (A[end] >= target) {
    return end;
  }

  return A.length;
}

/**
 * function: 判断哪个值离 target 更近
 * @param A
 * @param target
 * @param left
 * @param right
 * @returns {boolean}
 */
function isLeftCloser(A, target, left, right) {
  // 如果左边已经耗尽，返回 false
  if (left < 0) {
    return false;
  }

  // 如果右边耗尽, 返回 true
  if (right >= A.length) {
    return true;
  }

  return target - A[left] <= A[right] - target;
}

let arr = [1, 10, 15, 25, 35, 45, 50, 59];
console.log(findClosestElements(arr, 30, 7));
