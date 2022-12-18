// https://www.lintcode.com/problem/610/

function twoSum7(nums, target) {
  let len = nums.length;

  let map = new Map();
  for (let i = 0; i < len; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < len; i++) {
    let num1 = nums[i];
    let num2 = num1 + Math.abs(target);
    if (map.has(num2) && map.get(num2) !== i) {
      return [num1, num2];
    }
  }

  return [];
}

let nums = [0, 5, 7];
let target = -2;
console.log(twoSum7(nums, target));
