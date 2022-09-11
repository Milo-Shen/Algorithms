// https://leetcode.cn/problems/maximum-depth-of-n-ary-tree/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root) {
    return 0;
  }

  let queue = [root];

  let depth = 0;

  while (queue.length) {
    let len = queue.length;
    depth++;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      for (let j = 0; j < node.children.length; j++) {
        queue.push(node.children[j]);
      }
    }
  }

  return depth;
}
