// https://leetcode.cn/problems/linked-list-cycle/

const { build_list } = require('../../Base/List/Javascript/List');

function hasCycle(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // 快慢指针相遇，说明有环
    if (fast === slow) {
      return true;
    }
  }

  return false;
}

let root = build_list([2, 4, 5]);
console.log(hasCycle(root));
