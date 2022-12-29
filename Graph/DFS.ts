/**
 * The main algorithm of DFS is
 * for (i = 0; i < n; i++) {
 *  if (!visited(i)) {
 *      dfs(i);
 *  }
 * }
 */

function dfsOfGraph(n: number, addList: number[][]): number[] {
  let graph = [];
  let visited = new Set<number>();
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i, visited, addList, graph);
    }
  }
  return graph;
}

function dfs(node, visited, addList, graph): void {
  graph.push(node);
  visited.add(node);
  for (let item of addList[node]) {
    if (!visited.has(item)) {
      dfs(item, visited, addList, graph);
    }
  }
}
