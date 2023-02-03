function subSetSum(arr: number[], target: number): boolean {
  let dp: boolean[][] = [];
  // base case of the problem
  // if there is no items in arr then we can return false as it will not add up to any sum.
  // If target sum is 0, then we can return true, as we do not need to take any item to add up to 0.
  let len = arr.length;
  if (len == 0) {
    return false;
  }
  if (target == 0) {
    return true;
  }

  for (let i = 0; i < len; i++) {
    dp.push([]);
  }

  for (let i = 0; i < target + 1; i++) dp[0][i] = false;
  for (let i = 0; i < len + 1; i++) dp[i][0] = true;

  for (let i = 1; i < len + 1; i++) {
    for (let j = 1; j < target + 1; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[len][target];
}

// https://leetcode.com/discuss/interview-question/1279773/google-interview-question-array-subset-sum-equals-k
