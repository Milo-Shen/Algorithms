// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

const { build_list, print_list } = require('../../Base/List/Javascript/List');

function deleteDuplicates(head) {
  let cur = head;
  let pre = cur;
  while (cur) {
    if (pre !== cur && cur.val === pre.val) {
      pre.next = cur.next;
      cur = cur.next;
    } else {
      pre = cur;
      cur = cur.next;
    }
  }

  return head;
}

const list = build_list([1, 1, 2]);
print_list(deleteDuplicates(list));
