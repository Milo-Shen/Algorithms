// https://leetcode.cn/problems/swap-nodes-in-pairs/

const { build_list, print_list } = require('../../Base/List/Javascript/List');

function swapPairs(head) {
  if (!head || !head.next) {
    return head;
  }

  let next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
}

let list = build_list([1, 2, 3, 4]);
let header = swapPairs(list);
print_list(header);
