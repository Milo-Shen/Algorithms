// https://www.lintcode.com/problem/901
// https://leetcode.cn/problems/closest-binary-search-tree-value-ii/

function closestKValues(root, target, k) {
  let result = [];
  let sort_array = [];
  get_sort_arrays(root, sort_array);
  let right = findUpperClosest(sort_array, target);
  let left = right - 1;

  for (let i = 0; i < k; i++) {
    if (isLeftCloser(sort_array, left, right, target)) {
      result.push(sort_array[left]);
      left--;
    } else {
      result.push(sort_array[right]);
      right++;
    }
  }

  return result;
}

function isLeftCloser(A, left, right, target) {
  if (left < 0) {
    return false;
  }

  if (right >= A.length) {
    return true;
  }

  return target - A[left] < A[right] - target;
}

function get_sort_arrays(root, sort_array) {
  if (!root) {
    return;
  }
  get_sort_arrays(root.left, sort_array);
  sort_array.push(root.val);
  get_sort_arrays(root.right, sort_array);
}

// 找到 >= target 的最小元素
function findUpperClosest(sort_array, target) {
  let start = 0;
  let end = sort_array.length - 1;

  while (start + 1 < end) {
    let mid = start + ~~((end - start) / 2);

    if (target <= sort_array[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (sort_array[start] >= target) {
    return start;
  }

  if (sort_array[end] >= target) {
    return end;
  }

  return sort_array.length;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [4, 2, 5, 1, 3];
let target = 3.714286;
let k = 2;
let binaryTreeRoot = buildBinaryTree(nums);
console.log(closestKValues(binaryTreeRoot, target, k));
