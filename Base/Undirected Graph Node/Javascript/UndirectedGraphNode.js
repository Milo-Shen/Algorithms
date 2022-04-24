const { dataAdapter } = require('./helper');

class UndirectedGraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = [];
  }
}

module.exports = {
  UndirectedGraphNode,
};


