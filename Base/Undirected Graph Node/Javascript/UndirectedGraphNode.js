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
  let set = new Set();
  let root = new UndirectedGraphNode(data[0].label);
}

module.exports = {
  UndirectedGraphNode,
};

let test_data = dataAdapter([1, 2, '4#2', 1, '4#4', 1, 2]);
console.log(buildUndirectedGraph(test_data));