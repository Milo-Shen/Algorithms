// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets-ii/submissions/

function subsets(nums) {
  let result = [];
  if (!nums) {
    return [[]];
  }

  nums = nums.sort((a, b) => a - b);

  dfs(nums, 0, [], result);

  return result;
}

// 1. 递归的定义
function dfs(nums, start_index, subset, result) {
  result.push([...subset]);

  for (let i = start_index; i < nums.length; i++) {
    // 这种情况下元素的排布为 start_index - 1 ... start_index + 1
    // 这种情况下 nums[i - 1] 并没有被放入 subsets 里面
    // 这种情况下出现了挑选了第二个 1 没有挑选第一个 1 的情况，这种情况需要去重
    if (i !== 0 && nums[i] === nums[i - 1] && i > start_index) {
      continue;
    }

    subset.push(nums[i]);
    dfs(nums, i + 1, subset, result);
    subset.pop();
  }
}

// test cases
let nums = [1, 1, 1];
console.log(subsets(nums));
