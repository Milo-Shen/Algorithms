// https://www.lintcode.com/problem/590

const { UnionFind } = require('../../Base/UnionFind/Javascript/UnionFind');

class ConnectingGraph2 {
  constructor(n) {
    this.union_find = new UnionFind();
    for (let i = 0; i < n; i++) {
      this.union_find.add(i);
    }
  }

  connect(a, b) {
    return this.union_find.merge(a, b);
  }

  query(a) {
    return this.union_find.get_size_of_set(a);
  }
}

// test cases
let connecting_graph = new ConnectingGraph2(5);
console.log(connecting_graph.query(1));
connecting_graph.connect(1, 2);
console.log(connecting_graph.query(1));
connecting_graph.connect(2, 4);
console.log(connecting_graph.query(1));
connecting_graph.connect(1, 4);
console.log(connecting_graph.query(1, 4));
