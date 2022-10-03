// https://leetcode.cn/problems/sort-array-by-increasing-frequency/

function frequencySort(nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  nums.sort((a, b) => {
    const cnt1 = map.get(a);
    const cnt2 = map.get(b);
    return cnt1 !== cnt2 ? cnt1 - cnt2 : b - a;
  });

  return nums;
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
