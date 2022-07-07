// https://www.lintcode.com/problem/134
// https://leetcode.cn/problems/lru-cache/
// https://leetcode.cn/problems/lru-cache-lcci/
// https://leetcode.cn/problems/OrIXps/

const { LinkedNode } = require('../../Base/List/Javascript/List');

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity = 1) {
  // Cache 的最大容量, 超过容量就需要淘汰数据
  this.capacity = capacity;
  // 单链表 dummy 头
  this.dummy = new LinkedNode();
  // 单链表的尾节点
  this.tail = this.dummy;
  // 存储映射关系: key => key 所对应数据节点之前的节点
  this.key_to_prev = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // 如果这个 key 根本不存在于缓存, 返回 -1
  if (!this.key_to_prev.has(key)) {
    return -1;
  }

  // 这个 key 刚刚被访问过, 因此该节点应当被移动到链表尾部
  this.kick(key);

  // 这个节点被移动到了链表尾部, 成为了 tail 节点, 返回 tail 的值
  return this.tail.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 如果 key 已经存在, 更新 key node 的 value
  if (this.key_to_prev.has(key)) {
    // 把该节点放到链表尾部
    this.kick(key);

    // 更新 key 节点 ( key 节点移动到了尾部, 就是 tail 节点的值 )
    this.tail.val = value;
    return;
  }

  // 如果 key 不存在, 则在链表尾部存入节点
  this.push_back(new LinkedNode(key, value));

  // 如果 cache 超出上限, 淘汰表头, key_to_prev 的 length 就是链表长度
  if (this.key_to_prev.size > this.capacity) {
    this.pop_front();
  }
};

/**
 * function: 将一个点插入到链表尾部
 * @param node
 */
LRUCache.prototype.push_back = function (node) {
  // 当前的 tail 成为 node 的前一个节点
  this.tail.next = node;
  this.key_to_prev.set(node.key, this.tail);
  this.tail = this.tail.next;
};

/**
 * function: 将 key 节点移动至尾部
 * @param key
 */
LRUCache.prototype.kick = function (key) {
  // key 节点前面的节点
  let prev = this.key_to_prev.get(key);
  // 包含 key 的节点
  let key_node = prev.next;

  // 如果 key 所对应的点已经在链表尾, 则无需移动
  if (key_node.key === this.tail.key) {
    return;
  }

  // 从链表中删除 key 节点, 一共有 3 步 :
  // 1. key node 前面的节点指向 ket node 的下一个节点 ( 跳过 key node )
  prev.next = key_node.next;
  // 2. 更新 key node 的下一个节点所对应的前导点为 prev
  this.key_to_prev.set(key_node.next.key, prev);
  // 3. 断开 key node 指向 key node 的下一个节点的链接
  key_node.next = null;

  // 将 key 节点放到队尾
  this.push_back(key_node);
};

/**
 * function: 删除头部 least recently used 节点
 */
LRUCache.prototype.pop_front = function () {
  // 需要被删除的头部节点
  let head = this.dummy.next;
  // 把删除节点的映射关系从 key_to_prev 中删除
  this.key_to_prev.delete(head.key);
  // dummy 后移, 新的 dummy 的 next 指向新的头节点
  this.dummy.next = head.next;
  // 在 key_to_prev 中更新新的头节点的映射关系
  this.key_to_prev.set(head.next.key, this.dummy);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
