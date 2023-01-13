function allPathsSourceTarget(graph: number[][]): number[][] {
  let q = [];
  let source = 0;
  let dest = graph.length - 1;
  let paths = [];
  q.push([source]);
  while (q.length > 0) {
    let currPath = q.shift();
    let node = currPath[currPath.length - 1];
    if (node == dest) {
      paths.push([...currPath]);
    } else {
      for (let item of graph[node]) {
        let tmpPath = [...currPath];
        tmpPath.push(item);
        if (item == dest) {
          paths.push([...tmpPath]);
        } else {
          q.push([...tmpPath]);
        }
      }
    }
  }
  return paths;
}
