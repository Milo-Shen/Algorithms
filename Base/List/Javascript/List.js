class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedNode {
  constructor(key = null, val = 0, next = null) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class DoubleLinkedListNode {
  constructor(val = 0, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

function build_list(arr) {
  // 异常检测
  let arr_len = arr.length;
  if (!arr || !arr_len) {
    return;
  }

  let root = new ListNode(arr[0]);
  let node = root;

  for (let i = 1; i < arr_len; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }

  return root;
}

function print_list(root) {
  let result = [];
  let node = root;

  while (node) {
    result.push(node.val);
    node = node.next;
  }

  console.log(result.join(' -> '));
}

module.exports = {
  ListNode,
  LinkedNode,
  build_list,
  print_list,
  DoubleLinkedListNode,
};
