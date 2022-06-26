// https://www.lintcode.com/problem/589/

const { UnionFind } = require('../../Base/UnionFind/Javascript/UnionFind');

class ConnectingGraph {
  constructor(n) {
    this.union_find = new UnionFind();
    for (let i = 0; i < n; i++) {
      this.union_find.add(i);
    }
  }

  connect(a, b) {
    return this.union_find.merge(a, b);
  }

  query(a, b) {
    return this.union_find.is_connected(a, b);
  }
}

// test cases
let connecting_graph = new ConnectingGraph(5);
console.log(connecting_graph.query(1, 2));
connecting_graph.connect(1, 2);
console.log(connecting_graph.query(1, 2));
console.log(connecting_graph.query(1, 3));
connecting_graph.connect(2, 4);
console.log(connecting_graph.query(1, 4));