const { dataAdapter } = require('./helper');

class UndirectedGraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = [];
  }
}

function buildUndirectedGraph(data) {
  if (!data || !data.length) {
    return null;
  }

  data = dataAdapter(data);
  let map = new Map();

  // create the root
  let label = data[0].label;
  let root = new UndirectedGraphNode(label);
  map.set(label, root);
  buildNodeFromNeighbors(root, data[0].neighbors, map);

  // create other nodes
  for (let i = 1, len = data.length; i < len; i++) {
    let label = data[i].label;
    let node = map.get(label);
    if (!node) {
      node = new UndirectedGraphNode(label);
      map.set(label, node);
    }
    buildNodeFromNeighbors(node, data[i].neighbors, map);
  }

  return root;
}

function buildNodeFromNeighbors(root, list, map) {
  for (let i = 0, len = list.length; i < len; i++) {
    const label = list[i];
    let node = map.get(label);
    if (!node) {
      node = new UndirectedGraphNode(label);
      map.set(label, node);
    }
    root.neighbors.push(node);
  }
}

module.exports = {
  UndirectedGraphNode,
  buildUndirectedGraph,
};

// test cases
// console.log(buildUndirectedGraph(dataAdapter([1, 2, '4#2', 1, '4#4', 1, 2])));
// console.log(
//   buildUndirectedGraph(
//     dataAdapter([
//       [2, 4],
//       [1, 3],
//       [2, 4],
//       [1, 3],
//     ]),
//   ),
// );
