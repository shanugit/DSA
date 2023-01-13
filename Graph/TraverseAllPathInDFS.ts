function allPathsSourceTarget(graph: number[][]): number[][] {
  let n = graph.length;
  if (n == 0) return [];
  let paths = [];
  dfs(0, n - 1, [], paths, graph);
  return paths;
}

function dfs(node, target, path, paths, graph): void {
  path.push(node);
  if (node == target) {
    let tmp = [];
    for (let item of path) tmp.push(item);
    paths.push(tmp);
    return;
  }
  for (let item of graph[node]) {
    dfs(item, target, path, paths, graph);
    path.pop();
  }
}
