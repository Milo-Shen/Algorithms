// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

function subsets(nums) {
  if (!nums) {
    return [];
  }

  // 如果不要求从小到大顺序的话, 这行可以省略
  let queue = [[]];
  nums = nums.sort((a, b) => a - b);

  let index = 0;
  while (index < queue.length) {
    let subset = queue[index++];

    for (let i = 0; i < nums.length; i++) {
      if (subset.length && nums[i] <= subset[subset.length - 1]) {
        continue;
      }

      let mew_subsets = [...subset];
      mew_subsets.push(nums[i]);
      queue.push(mew_subsets);
    }
  }

  return queue;
}

// test cases
let nums = [1, 2, 3];
console.log(subsets(nums));
