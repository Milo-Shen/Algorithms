// https://leetcode.cn/problems/delete-middle-node-lcci/

const deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
