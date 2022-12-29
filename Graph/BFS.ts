/**
 * Algorith remains same as dfs
 * for (i = 0; i < n; i++) { // this loop we need as graph can have multilpe disconnected component.
 *    if (!vo=isited(i)) {
 *       bfs(i)
 *    }
 * }
 */

function bfsOfGraph(n, addList): number[] {
  let ans = [];
  let visited = new Set<number>();

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      bfs(i, visited, addList, ans);
    }
  }
  return ans;
}

function bfs(
  node: number,
  visited: Set<number>,
  addList: number[][],
  ans: number[]
): void {
  let q: number[] = [];
  q.push(node);
  visited.add(node);
  while (q.length > 0) {
    let tmp = q.shift();
    for (let item of addList[tmp]) {
      if (!visited.has(item)) {
        bfs(item, visited, addList, ans);
      }
    }
  }
}
