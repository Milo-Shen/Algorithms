// https://leetcode-cn.com/problems/search-insert-position/

function findUpperClosest(nums, target) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  if (target > nums[end]) {
    return end + 1;
  }

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    // 如果 nums[mid] >= target, mid 复合条件向左边去寻找
    if (nums[mid] > target) {
      end = mid;
    }
    if (nums[mid] === target) {
      end = mid;
    }
    if (nums[mid] < target) {
      // 如果 mid < target, >= target 的元素在右边，丢掉左边
      start = mid;
    }
  }

  // 因为需要找到最左数，所以这里需要先判断 start
  if (nums[start] >= target) {
    return start;
  }

  // 如果 start 不行, 再判断 end
  if (nums[end] >= target) {
    return end;
  }

  return -1;
}

console.log(findUpperClosest([1, 3, 5, 6], 7));
