// https://leetcode.cn/problems/reverse-linked-list/comments/
function reverseList(head) {
  let pre = null;
  let cur = head;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }

  return pre;
}
