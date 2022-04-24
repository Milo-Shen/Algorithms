// https://www.lintcode.com/problem/137/
// https://leetcode-cn.com/problems/clone-graph/

const {
  UndirectedGraphNode,
  buildUndirectedGraph,
} = require('../../Base/UndirectedGraphNode/Javascript/UndirectedGraphNode');

function cloneGraph(node) {
  if (!node) {
    return null;
  }

  // 寻找所有的点
  let nodes = find_all_nodes_bfs(node);

  // 复制所有的点
  let mapping = clone_all_nodes(nodes);

  // 复制所有的边
  copy_all_edges(nodes, mapping);

  return mapping.get(node);
}

function find_all_nodes_bfs(node) {
  let node_set = new Set();
  let queue = [node];
  node_set.add(node);

  while (queue.length) {
    let node = queue.shift();
    for (let i = 0, len = node.neighbors.length; i < len; i++) {
      let neighbor = node.neighbors[i];
      if (node_set.has(neighbor)) {
        continue;
      }
      queue.push(neighbor);
      node_set.add(neighbor);
    }
  }

  return [...node_set];
}

function clone_all_nodes(nodes) {
  let map = new Map();
  for (let i = 0, len = nodes.length; i < len; i++) {
    let node = nodes[i];
    map.set(node, new UndirectedGraphNode(node.label));
  }
  return map;
}

function copy_all_edges(nodes, mapping) {
  for (let i = 0, len = nodes.length; i < len; i++) {
    let origin_node = nodes[i];
    let new_node = mapping.get(origin_node);
    for (let j = 0, j_len = origin_node.neighbors.length; j < j_len; j++) {
      let origin_neighbors_node = origin_node.neighbors[j];
      new_node.neighbors.push(mapping.get(origin_neighbors_node));
    }
  }
}

// test cases
let root = buildUndirectedGraph([1, 2, '4#2', 1, '4#4', 1, 2]);
console.log(cloneGraph(root));
