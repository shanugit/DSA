/**
 * If array of edges are provided in the problem we can create adjacency list from there
 * Following two ways are there -
 */

/**
 * 1.
 * @param n : number of nodes
 * @param edges : edges of the nodes
 * @returns : Adjacency list representation of the graph as number[][]
 */
function buildAdjacencyList(n: number, edges: number[][]): number[][] {
  let list: number[][] = [];
  for (let i = 0; i < n; i++) {
    list.push([]);
  }
  for (let edge of edges) {
    list[edge[0]].push(edge[1]);
    list[edge[1]].push(edge[0]);
  }
  return list;
}

function buildList(n: number, edges: number[][]): Map<number, number[]> {
  let list = new Map();
  for (let edge of edges) {
    if (!list.has(edge[0])) {
      list.set(edge[0], [edge[1]]);
    } else {
      let tmp = list.get(edge[0]);
      tmp?.push(edge[1]);
      list.set(edge[0], tmp);
    }
    if (!list.has(edge[1])) {
      list.set(edge[1], [edge[0]]);
    } else {
      let tmp2 = list.get(edge[1]);
      tmp2?.push(edge[0]);
      list.set(edge[1], tmp2);
    }
  }
  return list;
}
