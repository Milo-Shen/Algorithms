// https://leetcode.cn/problems/delete-node-in-a-linked-list/

const deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
