// https://www.lintcode.com/problem/960
// https://leetcode.cn/problems/first-unique-number/

const { DoubleLinkedListNode } = require('../../Base/List/Javascript/List');

// 使用双向链表 - DoubleLinkedList 来解题
function FirstUnique(nums) {
  // 单链表按照插入顺序存放所有的 unique 元素
  // dummy.next 指向链表表头 head
  // dummy 节点的作用:
  //  1. dummy 点为头结点的前一个节点
  //  2. 如果没有 dummy 节点, 头结点就没有前一个节点
  //     而其他节点都有前一个节点, 所以需要分类讨论, 逻辑复杂
  this.dummy = new DoubleLinkedListNode(0);

  // 指向链表表尾的指针
  this.tail = this.dummy;

  // 数据值 => 数值对应的节点
  this.num_to_node = new Map();

  // 存放重读出现过的数字 ( 出现次数 > 2 )
  this.duplicates = new Set();

  // 使用 nums 初始化 FirstUnique
  this.init_with_num(nums);
}

/**
 * function: init with num
 * @param nums
 */
FirstUnique.prototype.init_with_num = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    this.add(nums[i]);
  }
};

/**
 * function: show first unique
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  return this.dummy.next?.val || -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  // 如果一个数字已经重复出现过 2 次, 忽略, 立即返回
  if (this.duplicates.has(value)) {
    return;
  }

  // 如果一个数字是第一次出现, 则加入链表, 并返回
  if (!this.num_to_node.has(value)) {
    this.add_to_list_tail(value);
    return;
  }

  // 如果一个数字出现过 2 次, 则把这个数字从链表中移除
  this.remove(value);

  // 如果一个数字已经重复出现过 2 次, 则加入 duplicated
  this.duplicates.add(value);
};

/**
 * function: remove
 * @param num
 */
FirstUnique.prototype.remove = function (num) {
  // 从链表中删除 num 代表的点, 并更新 num_to_node
  // 通过 num_to_node 找到 num 节点
  let node = this.num_to_node.get(num);

  // 将 prev 指向 num 后面的节点 ( 通过 num 节点 )
  // 连接双向链表 node 1 -> node 2
  let prev = node.prev;
  prev.next = node.next;
  // 连接双向链表 node 1 <- node 2
  if (node.next) {
    node.next.prev = prev;
  }

  // 删除 number 所代表的节点
  this.num_to_node.delete(num);

  // 如果删除的是链表的最后一个节点, 则更新 tail 指针至前一个节点
  if (!node.next) {
    this.tail = node.prev;
  }
};

/**
 * function: add to list tail
 * @param num
 */
FirstUnique.prototype.add_to_list_tail = function (num) {
  let linked_node = new DoubleLinkedListNode(num);
  this.tail.next = linked_node;
  linked_node.prev = this.tail;
  // 在 num_to_node 中加入映射关系, ( 新节点值 => 新节点 )
  this.num_to_node.set(num, linked_node);
  this.tail = this.tail.next;
};

// test cases
let first_unique = new FirstUnique([2, 2, 1]);
console.log(first_unique.showFirstUnique());
