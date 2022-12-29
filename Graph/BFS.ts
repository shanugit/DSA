/**
 * Algorith remains same as dfs
 * for (i = 0; i < n; i++) { // this loop we need as graph can have multilpe disconnected component.
 *    if (!vo=isited(i)) {
 *       bfs(i)
 *    }
 * }
 */

function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  let graph = buildGraph(n, edges);
  return bfs(graph, source, destination);
}

function buildGraph(n: number, edges: number[][]): number[][] {
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph.push(new Array());
  }
  // creating addList for undirected graph
  for (let edge of edges) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }
  return graph;
}

function bfs(graph, node, dest) {
  let visited = new Set();
  let q = [];
  q.push(node);
  while (q.length > 0) {
    let tmpNode = q.shift();
    if (tmpNode == dest) return true;
    visited.add(tmpNode);
    for (let item of graph[tmpNode]) {
      if (!visited.has(item)) {
        q.push(item);
        visited.add(item);
      }
    }
  }
  return false;
}
