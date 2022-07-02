class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
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

  console.log(result);
}

module.exports = {
  ListNode,
  build_list,
  print_list,
};