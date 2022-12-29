/**
 * In this Union Find algorithm we can see that we have used Path compression and union by rank algo
 * Here both find and union API has time complexity of O(logn)
 */

class UnionFind {
  root = [];
  rank = [];
  constructor(size: number) {
    for (let i = 0; i < size; i++) {
      this.root.push(i);
      this.rank.push(1);
    }
  }

  find(x): number {
    if (x == this.root[x]) {
      return x;
    }
    return (this.root[x] = this.find(this.root[x]));
  }

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
