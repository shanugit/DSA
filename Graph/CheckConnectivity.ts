/**
 * Union Find alogorithm. Disjoint set data structure used
 * @param n
 * @param edges
 * @param source
 * @param destination
 * @returns
 */
function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const uf = new UnionFind(n);
  for (let edge of edges) {
    uf.union(edge[0], edge[1]);
  }
  return uf.find(source) == uf.find(destination);
}

class UnionFind {
  root = [];
  rank = [];
  constructor(size: number) {
    for (let i = 0; i < size; i++) {
      this.root.push(i);
      this.rank.push(1);
    }
  }

  // quick find where path compression algorithm is used
  find(x): number {
    if (x == this.root[x]) {
      return x;
    }
    return (this.root[x] = this.find(this.root[x]));
  }
  // quick union algorithm where union by rank algorith is used
  union(x, y): void {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX != rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX] += 1;
      }
    }
  }
}
/**
 * Using BFS algorithm and Disjoint list data structure
 * @param n
 * @param edges
 * @param source
 * @param destination
 * @returns
 */
function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  let graph = buildGraph(n, edges);
  let q = [];
  q.push(source);
  let visited = new Set();
  while (q.length > 0) {
    let node = q.shift();
    if (node === destination) return true;
    if (!visited.has(node)) {
      visited.add(node);
      for (let item of graph[node]) {
        if (!visited.has(item)) {
          q.push(item);
        }
      }
    }
  }
  return false;
}

// building the undirected graph
function buildGraph(n, edges): number[][] {
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph.push([]);
  }
  for (let edge of edges) {
    // for undirected graph connect both of them to each other
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }
  return graph;
}

/**
 * using DFS algorithm and Disjoint list data structure
 * @param n
 * @param edges
 * @param source
 * @param destination
 * @returns
 */
function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  let graph = buildGraph(n, edges);
  let visited = new Set();
  visited.add(source);
  return dfs(graph, source, destination, visited);
}

function buildGraph(n, edges): number[][] {
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph.push([]);
  }
  for (let edge of edges) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }
  return graph;
}

function dfs(graph, source, dest, visited): boolean {
  if (source == dest) {
    return true;
  }
  for (let neighbor of graph[source]) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      if (dfs(graph, neighbor, dest, visited)) {
        return true;
      }
    }
  }
  return false;
}
