// https://leetcode.cn/problems/convert-binary-number-in-a-linked-list-to-integer/

const { build_list } = require('../../Base/List/Javascript/List');

const getDecimalValue = function (head) {
  let nums = [];
  let value = 0;

  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) continue;
    value += Math.pow(2, len - i - 1);
  }

  return value;
};

// test cases
let root = build_list([1, 0, 1]);
console.log(getDecimalValue(root));
